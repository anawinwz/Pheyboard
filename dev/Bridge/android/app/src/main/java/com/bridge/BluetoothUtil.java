//for other bluetooth action (not checking the device interface)
package com.bridge;

import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Callback;
//it may be useful when send data back to JS
import java.util.*;

public class BluetoothUtil extends ReactContextBaseJavaModule  {
    private static final  String TAG = "Test listing device";

    public BluetoothUtil(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @ReactMethod
    public void logDeviceName(Callback jsCallback){
        BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        Set<BluetoothDevice> pairedDevices = bluetoothAdapter.getBondedDevices();
        int numdevice = 0;
        if (pairedDevices.size() > 0) {
            // There are paired devices. Get the name and address of each paired device.
            for (BluetoothDevice device : pairedDevices) {
                String deviceName = device.getName();
                String deviceHardwareAddress = device.getAddress(); // MAC address
                numdevice++;
            }
            //can send value to call back only once
            //if someone know which data type is appopriate for sending a list pair of string to js
            //pls. do it i have no idea about this
            jsCallback.invoke(numdevice);
        }
    }
    public String getName() {
        return "BluetoothUtil";
    }

}