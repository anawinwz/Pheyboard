//will change to touchable content in latter
import React, { Component } from 'react';
import { StyleSheet, View,TouchableHighlight,Image} from 'react-native';
export default class SemiCircle extends Component{
    state = {collapse:true};
    checkCollapse =() =>{
      this.state.collapse ? this.setState({collapse:false}):
        this.setState({collapse:true})
    }
    render(){
        return(
            <View style={styles.circle_wrapper}>
              {this.state.collapse ? 
                <TouchableHighlight onPress={this.checkCollapse} style={styles.circle}>
                  <Image style={{width:75,height:75}} source={require('../assets/index.png')}/>
                </TouchableHighlight>:
                <View style={styles.circle_full}>

                </View>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    circle_wrapper:{
      flexDirection:"row-reverse",
      paddingTop: 15
    },
    circle_full:{
      flexDirection:"row",
      width:300,
      height:100,
      borderBottomLeftRadius:200,
      borderTopLeftRadius:200,
      backgroundColor:"white"
    },
    circle:{
      justifyContent:"center",
      alignItems:"center",
      width:130,
      height:100,
      borderBottomLeftRadius:200,
      borderTopLeftRadius:200,
      backgroundColor:"white"
    }
  })