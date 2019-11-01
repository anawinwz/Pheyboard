import React,{Component} from 'react';
import {TouchableHighlight,Image,View,StyleSheet,Text} from 'react-native';

export default class ChangeElements extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.change_wrapper}>
                <TouchableHighlight underlayColor="white" style={styles.circle_right} onPress ={this.props.onPress}>
                    <View style={styles.button_content}>
                        <Image style={{width:50,height:50}} source={require('../assets/left.png')}/>
                        <Text style={{fontSize:14, top:5}}>Back</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    change_wrapper:{
        flexDirection:"row",
        paddingTop:15,
        justifyContent:"space-between"
    },
    circle_left:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        height:100,
        borderBottomLeftRadius:200,
        borderTopLeftRadius:200,
        backgroundColor:"white"
    },
    circle_right:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        height:100,
        borderBottomRightRadius:200,
        borderTopRightRadius:200,
        backgroundColor:"white"
    },
    button_content:{
        justifyContent:'center',
        alignItems:"center"
    } 
})