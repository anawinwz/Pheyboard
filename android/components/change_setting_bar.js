import React,{Component} from 'react';
import {TouchableHighlight,Image,View,StyleSheet,Text} from 'react-native';
import Dialog from 'react-native-dialog'

export default class ChangeElements extends Component{
    constructor(props){
        super(props)
        this.state = {
            showResetDialog: false
        }
    }
    toggleResetDialog() {
        this.setState({showResetDialog: !this.state.showResetDialog})
    }
    handleResetCancel() {
        this.setState({showResetDialog: false})
    }
    handleResetConfirm() {
        this.props.dispatch({type: 'RESET_CURRENT_SET'})
        this.setState({showResetDialog: false})
    }
    render(){
        return(
            <View style={styles.change_wrapper}>
                <TouchableHighlight underlayColor="white" style={styles.circle_right} onPress ={this.props.onPress}>
                    <View style={styles.button_content}>
                        <Image style={{width:40,height:40}} source={require('../assets/left.png')}/>
                        <Text style={{fontSize:14, top:5}}>Back</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white" style={styles.circle_left} onPress ={this.toggleResetDialog.bind(this)}>
                    <View style={styles.button_content}>
                        <Image style={{width:53,height:40}} source={require('../assets/reset.png')}/>
                        <Text style={{fontSize:14, top:5}}>Reset Set</Text>
                    </View>
                </TouchableHighlight>
                <Dialog.Container visible={this.state.showResetDialog}>
                    <Dialog.Title style={{fontSize:24}}>Warning</Dialog.Title>
                    <Dialog.Description>
                        "Reset Set" will remove all buttons in the current selected set and rename this set to default name.{"\n\n"}
                        Do you want to reset "{this.props.selectedSet}" set?
                    </Dialog.Description>
                    <Dialog.Button label="No" onPress={this.handleResetCancel.bind(this)} />
                    <Dialog.Button label="Yes" onPress={this.handleResetConfirm.bind(this)} />
                </Dialog.Container>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    change_wrapper:{
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
