import React, { Component } from 'react';
import { StyleSheet, View,TouchableHighlight,Image,Text} from 'react-native';


export default class SemiCircle extends Component{
    constructor(props){
      super(props)
    }
    state = {collapse:true};
    checkCollapse =() =>{
      this.state.collapse ? this.setState({collapse:false}):this.setState({collapse:true})
    }
    render(){
        return(
            <View style={styles.circle_wrapper}>
              {this.state.collapse ? 
                <TouchableHighlight onPress={this.checkCollapse} underlayColor="white" style={styles.circle}>
                  <View style={styles.circle}>
                    <Image style={{width:50,height:50}} source={require('../assets/option.png')}/>
                    <Text style={{fontSize:14, top:5}}>OPTION</Text>
                  </View>
                </TouchableHighlight> 
                :
                <View style={styles.circle_full}>
                  <TouchableHighlight onPress={this.checkCollapse} underlayColor="white" style={styles.setting_button}>
                    <View style={styles.setting_button}>
                      <Image style={{width:50,height:50}} source={require('../assets/right.png')}/>
                      <Text style={{fontSize:14, top:5}}>BACK</Text>
                    </View>                    
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.props.CrePress} underlayColor="white" style={styles.setting_button}>
                    <View style={styles.setting_button}>
                      <Image style={{width:50,height:50}} source={require('../assets/add.png')}/>
                      <Text style={{fontSize:14, top:5}}>ADD</Text>
                    </View>                                                        
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.props.DelPress} underlayColor="white" style={styles.setting_button}>
                    <View style={styles.setting_button}>
                      <Image style={{width:50,height:50}} source={require('../assets/delete.png')}/>
                      <Text style={{fontSize:14, top:5}}>DELETE</Text>
                    </View>                                                        
                  </TouchableHighlight>
                  <TouchableHighlight onPress={this.props.ChangePress} underlayColor="white" style={styles.setting_button}>
                    <View style={styles.setting_button}>
                      <Image style={{width:50,height:50}} source={require('../assets/sets.png')}/>
                      <Text style={{fontSize:14, top:5}}>CHANGE</Text>
                    </View>                                                        
                  </TouchableHighlight>                  
                </View>}
            </View>
        )
    }
}
const size_of_box = 70
const styles = StyleSheet.create({
    circle_wrapper:{
      flexDirection:"row-reverse",
      paddingTop: 15
    },
    circle_full:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:350,
      height:100,
      borderBottomLeftRadius:200,
      borderTopLeftRadius:200,
      backgroundColor:"white"
    },
    circle:{
      justifyContent:"center",
      alignItems:"center",
      width:120,
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
    },
  })