import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,Button,Alert,NativeModules} from 'react-native';
export default class Bridge extends Component{
  constructor(props){
    super(props)
    this.state = {isOn:false,isSup:false,text:'',txtRecive:''}
    this.updateState();
  }
  //********************************** custom function *****************************

  updateState = ()=> {
    NativeModules.Checker.getStatus((err,isOn,isSup)=>{
      this.setState({isOn:isOn,isSup:isSup});
    })
  }
  buttonHandler = () => {
    //for send to the bluetooth in future
    (this.state.text == '')? Alert.alert("You enter not thing can't send") : Alert.alert(this.state.text+' has been send');
    this.setState({text:''});
  }
  blueButtonHandler = ()=>{
    if(this.state.isOn){
      NativeModules.Checker.turnOff();
      this.updateState();
    }
    else{
      NativeModules.Checker.turnOn();
      this.updateState();
    }
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