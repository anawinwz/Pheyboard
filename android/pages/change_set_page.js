import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View} from 'react-native'
import ChangeSettingBar from '../components/change_setting_bar'
export default class DeletePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Modal 
                animationType = {'none'}
                transparent={false}
                visible = {this.props.isChange}
            >
                <View style ={styles.modals_del}>
                    <View style={styles.del_setting_container}>
                        <ChangeSettingBar onPress ={this.props.onPress}/>
                    </View>
                    <Text style = {styles.head_text}>Despacito</Text>
                    <View style = {styles.pad_sets_container}>

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
    },
    head_text:{color: 'white', fontSize:36, textAlign: 'center'},
    pad_sets_container:{
        flex:4,
        alignItems:"center",
        alignContent:"center",    
        borderRadius:10,// change how round the box
        backgroundColor:"grey",
        margin: 30
    },
    delete_button_select:{
        backgroundColor:'red',
        borderRadius:10,
    }
})