import React from 'react';
import { TouchableHighlight, StyleSheet, Text,View,Image } from 'react-native';


export const AddButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress, disable = false,borderStyle={}} = props;
    const numReg = RegExp('[1234567890]')
    return (
        <View style={borderStyle}>
            {(numReg.test(props.title)) ? 
                <TouchableHighlight onPress={onPress} style={[styles.button, style]} disable = {props.disable}>
                    <View style={styles.button_content}>
                        <Image style={{width:50,height:50}} source={require('../assets/plus.png')}/>
                    </View>
                </TouchableHighlight>:
                <View style={[styles.button, style]}>
                    <Text style={[styles.text, textStyle]}>{props.title}</Text>
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
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    },
    button_content:{
        justifyContent:'center',
        alignItems:"center"
    } 
});