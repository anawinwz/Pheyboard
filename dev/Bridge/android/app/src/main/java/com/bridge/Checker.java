package com.bridge;

import android.bluetooth.BluetoothAdapter;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class Checker extends ReactContextBaseJavaModule  {
    private static Boolean isOn = false;
    private static Boolean isSup = false;
    public Checker(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(
            Callback successCallback) {
        successCallback.invoke(null, isOn,isSup);

    }

    @ReactMethod
    public void check(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (mBluetoothAdapter == null) {
            // Device does not support Bluetooth
            isSup = false;
            isOn = false;
        } else {
            isSup = true;
            if (!mBluetoothAdapter.isEnabled()) {
                // Bluetooth is not enable :)
                isOn = false;
            }else{
                isOn =true;
            }
        }
    }
    @Override
    public String getName() {
        return "Checker";
    }

}