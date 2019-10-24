//will change to touchable content in latter
import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity,Image } from 'react-native';
export default class SemiCircle extends Component{
    render(){
        return(
            <View style={styles.circle_wrapper}>
                <View style = {styles.circle}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    circle_wrapper:{
      flexDirection:"row-reverse",
      paddingTop: 15
    },
    circle:{
      flexDirection:"row",
      width:300,
      height:75,
      borderBottomLeftRadius:200,
      borderTopLeftRadius:200,
      backgroundColor:"white"
    }
  })