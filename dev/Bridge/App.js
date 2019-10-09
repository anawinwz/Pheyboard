import React,{Component} from 'react';
import {StyleSheet,View,Text,NativeModules} from 'react-native';
export default class Bridge extends Component{
  constructor(props){
    super(props)
    this.state = {isOn:false,isSup:false}
    this.updateState();
  }
  //check on fire apps
  componentWillMount() {
    NativeModules.Checker.check();
    this.updateState();
  }
  updateState = ()=> {
    NativeModules.Checker.getStatus((err,isOn,isSup)=>{
      this.setState({isOn:isOn,isSup:isSup});
    })
  }
  render(){
    return (
      <View>
        <Text>This device is {this.state.isSup ? "support":"not support"} bluetooth</Text>
        <Text>The bluetooth is {this.state.isOn ?"on":"off"}</Text>
      </View>
    );
  }
}
