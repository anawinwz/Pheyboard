import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import Circle from './components/circle'
import {CustomButton} from './components/custom-btn'
import DeleteElements from './components/delete-element'
export default class HelloWorldApp extends Component {
  state  = {int:0,isDel:false,selMem:-1}
  buttons = ['Copy','Paste',null,null,null,null,null,null,null,null,null,null]
  headerText = ['Sample Shortcut','Select button to delete']
  delClickHandler = () =>{
    this.setState({isDel: !this.state.isDel})
    console.log(this.state.isDel)
  }
  render() {
    return (
    <View style={styles.main_container}>
      <View style={styles.setting_container}>
        {!this.state.isDel ? <Circle onClick={this.delClickHandler}/>:
          <DeleteElements/>}
      </View>
      <Text style={styles.pad_name}>{this.state.isDel ? this.headerText[1]:this.headerText[0]}</Text>
      <View style={styles.key_pad_container}>
        {this.buttons.map((value, idx) => <CustomButton
        key={idx} 
        title={value}
        onPress={()=>(value === null) ? null:Alert.alert(value)}
        style={(value === null) ? {backgroundColor: 'gray'} : null}
        textStyle={{}}
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
