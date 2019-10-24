import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button,Alert,NativeModules} from 'react-native';
export default class Bridge extends Component{
  constructor(props){
    super(props)
    this.state = {isOn:false,isSup:false,text:'',txtRecive:'',devices:{},selectedDevice:null}
    this.updateState();
  }
  baseState = this.state;
  //********************************** custom function *****************************

  updateState = ()=> {
    NativeModules.Checker.getStatus((err,isOn,isSup)=>{
      this.setState({isOn:isOn,isSup:isSup});
      if(isOn) {
        NativeModules.BluetoothUtil.getPairedDevices((data) => {
          this.setState({devices: data})
        })
      }
    })
  }
  buttonHandler = () => {
    //for send to the bluetooth in future
    //there is a bug when you clear the text so I intentionally change to the current code
    //if someone know the way pls. do it
    if(this.state.text != ''){
      NativeModules.BluetoothUtil.sendMessage(this.state.text);
    }
  }
  blueButtonHandler = ()=>{
    if(this.state.isOn){
      if (this.state.selectedDevice) {
        NativeModules.BluetoothUtil.disconnectDevice(this.state.selectedDevice);
        this.setState({selectedDevice: ''});
      }
      NativeModules.Checker.turnOff();
      this.updateState();
    }
    else{
      NativeModules.Checker.turnOn();
      this.updateState();
    }
  }
  selectDevice = (mac) => {
    if (this.state.selectedDevice) {
      NativeModules.BluetoothUtil.disconnectDevice(mac);
    }
    this.setState({selectedDevice: mac});
    NativeModules.BluetoothUtil.connectDevice(mac);
  }
  //************************** react state function********************************
  //check on fire apps
  UNSAFE_componentWillMount() {
    NativeModules.Checker.check();
    this.updateState();
  }
  componentDidMount(){
    this._timeint = setInterval(()=>{
      NativeModules.Checker.reCheck();
      this.updateState();
    },50)
  }
  componentWillUnmount(){
    clearInterval(this._timeint);
  }
  //---------------------main page here ----------------------
  render(){
    return (
      <View>
        <Text>This device is {this.state.isSup ? "support":"not support"} bluetooth</Text>
        <TextInput
          style = {{height:40}}
          placeholder="text to send"
          onChangeText ={(text) => this.setState({text})}
          value = {this.state.text}
        />
        <View style ={styles.two_button}>
            <Button
              title = "send"
              disabled = {(this.state.isOn & this.state.isSup)? false : true}
              onPress = {this.buttonHandler}
            />
            <Button
              title = {this.state.isOn ? "Turn off":"Turn on"}
              disabled = {this.state.isSup ? false:true}
              onPress ={this.blueButtonHandler}
            />
        </View>
        <Text>Recive msg</Text>
        <Text>{this.state.txtRecive}</Text>
        <Text>Paired devices</Text>
        {Object.keys(this.state.devices).map((mac) => 
          <Button
            key={mac}
            title={`${mac} - ${this.state.devices[mac]}`}
            onPress={() => this.selectDevice(mac)}
            disabled={mac === this.state.selectedDevice ? true : false}
          />)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  two_button:{
    flexDirection: 'row',
    justifyContent:'space-evenly'
  }
})