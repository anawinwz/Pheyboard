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

const styles = StyleSheet.create({
    button: {
        justifyContent:"center",
        alignItems:"center",
        width:100,     // change size of box here
        height:100,    // it have to be same as width if you want sqaure box
        borderRadius:10,// change how round the box
        backgroundColor:"white"        
    },

    text: {
        fontSize: 16
    },
});