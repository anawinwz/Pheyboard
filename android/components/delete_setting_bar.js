import React,{Component} from 'react';
import {TouchableHighlight,Image,View,StyleSheet,Text} from 'react-native';

export default class DeleteElements extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.delete_wrapper}>
                    <TouchableHighlight underlayColor="white" style={styles.circle_right} onPress ={this.props.onPress}>
                        <View style={styles.button_content}>
                            <Image style={{width:40,height:40}} source={require('../assets/left.png')}/>
                            <Text style={{fontSize:14, top:5}}>Back</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="white" style={styles.circle_left} onPress ={this.props.onDel}>
                        <View style={styles.button_content}>
                            <Image style={{width:40,height:40}} source={require('../assets/delete.png')}/>
                            <Text style={{fontSize:14, top:5}}>Delete</Text>
                        </View>
                    </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    delete_wrapper:{
        flexDirection:"row",
        paddingTop:20,
        justifyContent:"space-between"
    },
    circle_left:{
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:90,
        borderBottomLeftRadius:200,
        borderTopLeftRadius:200,
        backgroundColor:"white"
    },
    circle_right:{
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:90,
        borderBottomRightRadius:200,
        borderTopRightRadius:200,
        backgroundColor:"white"
    },
    button_content:{
        justifyContent:'center',
        alignItems:"center"
    } 
})