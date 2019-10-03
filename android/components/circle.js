//will change to touchable content in latter
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
export default class SemiCircle extends Component{
    render(){
        return(
            <View style={styles.circle_wrapper}>
                <View style = {styles.circle} />
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
      width:130,
      height:100,
      borderBottomLeftRadius:200,
      borderTopLeftRadius:200,
      backgroundColor:"white"
    }
  })