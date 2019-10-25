import React,{Component} from 'react';
import {TouchableHighlight,Image,View,StyleSheet,Text} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class DeleteElements extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.delete_wrapper}>
                    <TouchableHighlight style={styles.circle_right}>
                        <View>
                            <Image style={{width:50,height:50}} source={require('../assets/left.png')}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.circle_left}>
                        <Image style={{width:50,height:50}} source={require('../assets/delete.png')}/>
                    </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    delete_wrapper:{
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
    } 
})