import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native'

export const InputMacro = (props) =>{
    const {EditPress,onPress,state,keyMacro,pos} = props
    if(state > pos){
        if(state == pos + 1)
        {
            return(
                <TouchableOpacity onPress={EditPress} style={styles.button}>
                    <View style={[styles.button,{backgroundColor:"green"}]}>
                        <Text style={[styles.text,{color:'white'}]}>{keyMacro}</Text>
                        <View style={styles.editbox}>
                            <Text style={{color:'black',fontSize:12}}>EDIT</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        else
        {
            return(
            <View style={[styles.button,{backgroundColor:"green"}]}>
                <Text style={[styles.text,{color:'white'}]}>{keyMacro}</Text>
            </View>
            )
        }
    }
    else if(state === pos){
        return(
            <TouchableOpacity onPress={onPress} style={[styles.button]}>
                <Text style={[styles.text]}>Add Input</Text>
            </TouchableOpacity>
        )
    }
    else if(state < pos){
        return(
            <View style={[styles.button,{backgroundColor:"gray"}]}/>
        )
    }
}
const size_of_box = 75
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
    editbox:{
        justifyContent:"center",
        alignItems:"center",
        width:75,     
        height:20,    
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"white",
        position:'absolute', 
        left:0, 
        right:0,
        bottom:0
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    }
})