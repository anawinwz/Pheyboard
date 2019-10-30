import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View} from 'react-native'
import DeleteSettingBar from '../components/delete_setting_bar'
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
                        <DeleteSettingBar onPress ={this.props.onPress} onDel = {this.props.onDel}/>
                    </View>
                    <Text style = {{color: 'white'}}>Add Pageeeeee</Text>
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