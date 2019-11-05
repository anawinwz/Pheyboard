import React from 'react';
import { TouchableOpacity, StyleSheet, Text,View } from 'react-native';


export const CustomCircle = (props) => {
    const {style = {}, onPress, disable = false, borderStyle={}} = props;

    return (
        <View style={borderStyle}>
            <TouchableOpacity onPress={onPress} style={[styles.Circle, style]} disable = {props.disable}/>        
        </View>
    );
};
const size_of_box = 70;//change size for your device here default is 100 for android emu
const styles = StyleSheet.create({
    Circle: {
        justifyContent:"center",
        alignItems:"center",
        width:size_of_box,     
        height:size_of_box,    
        borderRadius:10,// change how round the box
        backgroundColor:"white",
        display: "flex",
        margin: 10
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    },
});