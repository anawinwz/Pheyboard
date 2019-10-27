import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import Circle from './components/circle'
import {CustomButton} from './components/custom-btn'
import DeletePage from './pages/delete_page'
export default class HelloWorldApp extends Component {
  state  = {int:0,isDel:false,selMem:-1}
  buttons = ['Copy','Paste',null,null,null,null,null,null,null,null,null,null]
  headerText = ['Sample Shortcut']
  //function listener from the delete page
  setSelMem(mem){
    var idMem = this.state.selMem;
    this.buttons[mem] !== null ? idMem = mem : idMem = -1;
    console.log("the button is selected: "+idMem);
    this.setState({selMem:idMem});
  }
  delClickHandler = () =>{
    this.setState({isDel: !this.state.isDel})
  }
  delMember = () =>{
    if(this.state.selMem !== -1){
      //set the button to null
      this.buttons[this.state.selMem] = null;
      console.log('it have to set to fucking null')
    }
  }
  render() {
    return (
    <View style={styles.main_container}>
      <DeletePage isDel={this.state.isDel} onPress = {this.delClickHandler} buttons={this.buttons} btnPress={this.setSelMem.bind(this)} sel={this.state.selMem} onDel = {this.delMember}/>
      <View style={styles.setting_container}>
        <Circle onClick={this.delClickHandler}/>
      </View>
      <Text style={styles.pad_name}>{this.headerText[0]}</Text>
      <View style={styles.key_pad_container}>
        {this.buttons.map((value, idx) => <CustomButton
        key={idx} 
        title={value}
        onPress={()=>(value === null) ? null:Alert.alert(value)}
        style={(value === null) ? {backgroundColor: 'gray'} : null}
        textStyle={{}}
        borderStyle={{}}
        disable={(value === null) ? true : false}
        />)}
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container:{
    backgroundColor:"black",
    flex:1
  },
  setting_container:{
    flex:1
  },
  pad_name:{color: 'white', fontSize:36, textAlign: 'center'},
  key_pad_container:{
    flex:4,
    paddingLeft:10,
    flexDirection: 'row', 
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 0
  }
})
