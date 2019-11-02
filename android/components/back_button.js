import React from 'react'
import {TouchableHighlight,Image,View,Text,StyleSheet} from 'react-native'


export const BackButton = (props) => {
    const {onClick} = props;
    return(
        <View style={styles.back_warperq}>
            <TouchableHighlight onPress = {props.onClick} style={[styles.circle_left,props.style]}>
                <View style={styles.button_content}>
                    <Image style={{width:40,height:40}} source = {require('../assets/left.png')}/>
                    <Text style={{fontSize:14, top:5}}>Back</Text>
                </View>
            </TouchableHighlight>            
        </View>
    )
}
const styles = StyleSheet.create({
    back_warper:{
        flexDirection:"row",
        paddingTop:15,
        justifyContent:"space-between"
    },
    circle_left:{
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