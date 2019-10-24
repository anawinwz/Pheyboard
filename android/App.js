import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import Circle from './components/circle'
import {CustomButton} from './components/custom-btn'
export default class HelloWorldApp extends Component {
  state  = {int:0}
  buttons = ['Copy','Paste',null,null,null,null,null,null,null,null,null,null]
  render() {
    return (
    <View style={styles.main_container}>
      <View style={styles.setting_container}>
        <Circle/>
      </View>
      <Text style={styles.pad_name}>Sample Shortcut</Text>
      <View style={styles.key_pad_container}>
        {this.buttons.map((value, idx) => <CustomButton
        key={idx} 
        title={value}
        onPress={()=>Alert.alert(value)}
        style={(value === null) ? {backgroundColor: 'gray'} : null}
        textStyle={{}}
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
    flex:3,
    paddingLeft:10,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginBottom: 20
  }
})
