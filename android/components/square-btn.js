import React from 'react';
import {Text,TouchableOpacitiy,Alert,StyleSheet} from 'react-native';
export default SquareBtn = (props)=>{
    const {title="enter"} =props
    return(
        <TouchableOpacitiy onPress={()=>Alert.alert("Yep its work")} style={styles.square}>
            <Text style={styles.square_text}>{props.title}</Text>
        </TouchableOpacitiy>
    );
};
const styles = StyleSheet.create({
    square:{
        justifyContent:"center",
        alignItems:"center",
        width:100,     // change size of box here
        height:100,    // it have to be same as width if you want sqaure box
        borderRadius:10,// change how round the box
        backgroundColor:"white"
    },
    square_text:{color:'black'} //change color or text-family 
})