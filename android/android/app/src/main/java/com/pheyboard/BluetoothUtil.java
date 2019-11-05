//for other bluetooth action (not checking the device interface)
package com.pheyboard;

// import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
//it may be useful when send data back to JS
import java.util.*;
import org.json.JSONObject;
import com.harrysoft.androidbluetoothserial.BluetoothManager;
import com.harrysoft.androidbluetoothserial.BluetoothSerialDevice;
import com.harrysoft.androidbluetoothserial.SimpleBluetoothDeviceInterface;

import io.reactivex.Observable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Function;
import io.reactivex.schedulers.Schedulers;

public class BluetoothUtil extends ReactContextBaseJavaModule  {
    private BluetoothManager bluetoothManager;
    private static Boolean isOn = false;
    private static Boolean isSup = false;
    private SimpleBluetoothDeviceInterface deviceInterface;
    public BluetoothUtil(ReactApplicationContext reactContext) {
        super(reactContext);
        bluetoothManager = BluetoothManager.getInstance();
    }
    @ReactMethod
    public void getStatus(Callback successCallback) {
        successCallback.invoke(null, isOn, isSup);
    }
    @ReactMethod
    public void getPairedDevices(Callback jsCallback){
        List<BluetoothDevice> pairedDevices = bluetoothManager.getPairedDevicesList();
        WritableMap devices = new WritableNativeMap();
        if (pairedDevices.size() > 0) {
            // There are paired devices. Get the name and address of each paired device.
            for (BluetoothDevice device : pairedDevices) {
                devices.putString(device.getAddress(), device.getName());
            }
        }
        jsCallback.invoke(devices);
    }
    @ReactMethod
    public void disconnectDevice(String mac) {
        bluetoothManager.closeDevice(mac);
    }
    @ReactMethod
    public void connectDevice(String mac) {
        bluetoothManager.openSerialDevice(mac)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(this::onConnected, this::onError);
    }
    private void onConnected(BluetoothSerialDevice connectedDevice) {
        Toast.makeText(getReactApplicationContext(), "Connected!", Toast.LENGTH_LONG).show();
        // You are now connected to this device!
        // Here you may want to retain an instance to your device:
        deviceInterface = connectedDevice.toSimpleDeviceInterface();

        // Listen to bluetooth events
        deviceInterface.setListeners(this::onMessageReceived, this::onMessageSent, this::onError);

        // Let's send a message:
        deviceInterface.sendMessage("Hello world!");
    }
    @ReactMethod
    public void sendMessage(String message) {
        // if (deviceInterface) {
        deviceInterface.sendMessage(message);
        // }
    }

    private void onMessageSent(String message) {
        // We sent a message! Handle it here.
        Toast.makeText(getReactApplicationContext(), "Sent a message! Message was: " + message, Toast.LENGTH_LONG).show(); // Replace context with your context instance.
    }

    private void onMessageReceived(String message) {
        // We received a message! Handle it here.
        Toast.makeText(getReactApplicationContext(), "Received a message! Message was: " + message, Toast.LENGTH_LONG).show(); // Replace context with your context instance.
    }

    private void onError(Throwable error) {
        // Handle the error
        Toast.makeText(getReactApplicationContext(), "Error: " + error.getMessage(), Toast.LENGTH_LONG).show();
    }


    public String getName() {
        return "BluetoothUtil";
    }

}