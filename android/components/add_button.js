import React from 'react';
import { TouchableOpacity, StyleSheet, Text,View } from 'react-native';


export const AddButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, disable = false,borderStyle={}} = props;
    const numReg = RegExp('[1234567890]')
    return (
        <View style={borderStyle}>
            {(numReg.test(props.title)) ? 
                <TouchableOpacity onPress={onPress} style={[styles.button, style]} disable = {props.disable}>
                    <Text style={[styles.text, textStyle]}>test</Text>
                </TouchableOpacity>:
                <View style={[styles.button,style]} >
                    <Text>{props.title}</Text>
                </View>
            }            
        </View>
    );
};
const size_of_box = 100;//change size for your device here default is 100 for android emu
const styles = StyleSheet.create({
    button: {
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