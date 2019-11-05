import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,TouchableHighlight,NativeModules} from 'react-native'
import DevicesSettingBar from '../components/devices_setting_bar'

import { connect } from 'react-redux';

class DevicesPage extends Component{
    constructor(props){
        super(props)
    }
    toggleBluetooth = () => {
      if(this.props.bluetooth.isOn){
        if (this.props.bluetooth.selectedDevice) {
          NativeModules.BluetoothUtil.disconnectDevice(this.props.bluetooth.selectedDevice);
          this.props.dispatch({type: 'BT_DISCONNECT'});
        }
        NativeModules.Checker.turnOff();
      }else{
        NativeModules.Checker.turnOn();
      }
    }
    selectDevice = (mac) => {
      if (!this.props.bluetooth.isOn || !this.props.bluetooth.isSup) return;

      if (this.props.bluetooth.selectedDevice) {
        NativeModules.BluetoothUtil.disconnectDevice(this.props.bluetooth.selectedDevice);
      }
      this.props.dispatch({type: 'BT_DISCONNECT'});
      NativeModules.BluetoothUtil.connectDevice(mac);
      this.props.dispatch({type: 'BT_CONNECT', mac: mac});
    }
    componentDidMount() {
      this._timeint = setInterval(() => {
        if (this.props.bluetooth.isOn) {
          NativeModules.BluetoothUtil.getPairedDevices((data) => {
            this.props.dispatch({type: 'BT_PAIRLIST', devices: data})
          })
        }
      }, 1000)
    }
    componentWillUnmount(){
      clearInterval(this._timeint);
    }
    render(){
        return(
            <Modal 
                animationType = {'none'}
                transparent={false}
                visible = {this.props.isDevices}
            >
                <View style ={styles.modals_del}>
                    <View style={styles.del_setting_container}>
                        <DevicesSettingBar onPress ={this.props.onPress} />
                    </View>

                    <View style = {styles.bluetooth_container}>
                      <TouchableHighlight underlayColor="white" style={styles.set_member} onPress={this.toggleBluetooth}>
                        <View style={styles.set_member}>
                          <View style={[styles.circle,(this.props.bluetooth.isOn) ? {backgroundColor : 'dodgerblue'} : {backgroundColor : 'white'} ]}/>
                          <Text style={styles.set_name}>Bluetooth</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    {this.props.bluetooth.isOn ?
                      
                    
                    <View style = {{flex: 3}}>
                      <Text style = {styles.head_text}>Paired Devices</Text><View style = {styles.pad_sets_container}>
                        {Object.keys(this.props.bluetooth.pairedDevices).map((mac) =>
                                <TouchableHighlight underlayColor="white" style={styles.set_member} key={mac}
                                onPress={() => {this.selectDevice(mac)}}>
                                    <View style={styles.set_member}>
                                        <View style={[styles.circle,(this.props.bluetooth.selectedDevice === mac) ? {backgroundColor : 'dodgerblue'} : {backgroundColor : 'white'} ]}/>
                                        <Text style={styles.set_name}>{this.props.bluetooth.pairedDevices[mac]}</Text>
                                    </View>
                                </TouchableHighlight>
                        )}
                    </View></View> : <View style = {{flex: 3}}></View>
                    }
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modals_del:{
        backgroundColor:"#151515",
        flex:1
    },
    del_setting_container:{
        flex:1
    },
    head_text:{color: 'white', fontSize:36, textAlign: 'center'},
    pad_sets_container:{
        flex:3,
        alignItems:"center",
        alignContent:"center",
        flexDirection:"column",
        borderRadius:10,// change how round the box
        backgroundColor:"grey",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        marginTop: 10
    },
    bluetooth_container:{
      
      alignItems:"center",
      alignContent:"center",
      borderRadius:10,// change how round the box
      backgroundColor:"grey",
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 20,
      marginTop: 10
    },
    set_member:{
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:"grey",
        width:350,     
        height:58,    
        borderRadius:10,// change how round the box
        display: "flex",
    },
    set_name:{
        color: 'white', 
        fontSize:20
    },
    circle:{
        backgroundColor: 'dodgerblue',
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth:5,
        borderColor:'white',
        margin: 10
    }
})



const mapStateToProps = function(state) {
    return {
      bluetooth: state.bluetooth
    }
}
export default connect(mapStateToProps)(DevicesPage);