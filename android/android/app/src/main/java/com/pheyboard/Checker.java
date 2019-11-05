//This class is for checking bluetooth adapter and turn off or turn on bluetooth untility
package com.pheyboard;

import android.bluetooth.BluetoothAdapter;
import android.app.Activity;
import android.bluetooth.BluetoothDevice;
import android.content.Intent;
import android.os.Bundle;

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
            isOn = mBluetoothAdapter.isEnabled();
        }
    }
    //in case of unexpected close the interface
    @ReactMethod
    public void reCheck(){
        //just return the status of bluetooth adapter
        this.check();
    }
    //turn on or off the interface of the bluetooth
    @ReactMethod
    public void turnOn(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if(!mBluetoothAdapter.isEnabled()){
            mBluetoothAdapter.enable();
        }
    }
    @ReactMethod
    public void turnOff(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if(mBluetoothAdapter.isEnabled()){
            mBluetoothAdapter.disable();
        }
    }
    @Override
    public String getName() {
        return "Checker";
    }

}