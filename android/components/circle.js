//will change to touchable content in latter
import React, { Component } from 'react';
import { StyleSheet, View,TouchableHighlight,Image,Text} from 'react-native';
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
                <TouchableHighlight onPress={this.checkCollapse}  style={styles.circle}>
                  <Image style={{width:75,height:75}} source={require('../assets/option.png')}/>
                </TouchableHighlight>:
                <View style={styles.circle_full}>
                  <TouchableHighlight onPress={this.checkCollapse} style={styles.setting_button}>
                    <Image style={{width:50,height:50}} source={require('../assets/right.png')}/>                    
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.checkCollapse} style={styles.setting_button}>                  
                    <Image style={{width:50,height:50}} source={require('../assets/add.png')}/>                                      
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.checkCollapse} style={styles.setting_button}>
                    <Image style={{width:50,height:50}} source={require('../assets/delete.png')}/>                    
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.checkCollapse} style={styles.setting_button}>
                    <Image style={{width:50,height:50}} source={require('../assets/sets.png')}/>                    
                  </TouchableHighlight>                  
                </View>}
            </View>
        )
    }
}
const size_of_box = 50
const styles = StyleSheet.create({
    circle_wrapper:{
      flexDirection:"row-reverse",
      paddingTop: 15
    },
    circle_full:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
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
    },
    setting_button:{
      justifyContent:"center",
      alignItems:"center",
      width:size_of_box,     
      height:size_of_box,    
      borderRadius:10,// change how round the box
      display: "flex",
      margin: 5         
    }
  })