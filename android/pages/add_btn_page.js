import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,Alert} from 'react-native'
import AddSettingBar from '../components/add_setting_bar'
export default class AddPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Modal 
                animationType = {'none'}
                transparent={false}
                visible = {this.props.isAdd}
            >
                <View style ={styles.modals_del}>
                    <View style={styles.del_setting_container}>
                        <AddSettingBar onPress ={this.props.onPress} onAdd = {this.props.onDel} tempName={this.props.tempName}/>
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modals_del:{
        backgroundColor:"black",
        flex:1
    },
    del_setting_container:{
        flex:1
    }
})