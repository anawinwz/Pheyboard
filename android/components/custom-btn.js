import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
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
        margin: 5    
    },

    text: {
        fontSize: 16
    },
});