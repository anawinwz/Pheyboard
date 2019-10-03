import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import Circle from './components/circle'
import {CustomButton} from './components/custom-btn'
export default class HelloWorldApp extends Component {
  state  = {int:0}
  render() {
    return (
    <View style={styles.main_container}>
      <View style={styles.setting_container}>
        <Circle/>
      </View>
      <View style={styles.key_pad_container}>
        <CustomButton 
        title="test"
        onPress={()=>Alert.alert("test")}
        style={{}}
        textStyle={{}}
        />
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
  key_pad_container:{
    flex:2,
    paddingLeft:10
  }
})
