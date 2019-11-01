import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View} from 'react-native'
import DeleteSettingBar from '../components/delete_setting_bar'
import {CustomButton} from '../components/custom-btn'
export default class DeletePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Modal 
                animationType = {'none'}
                transparent={false}
                visible = {this.props.isDel}
            >
                <View style ={styles.modals_del}>
                    <View style={styles.del_setting_container}>
                        <DeleteSettingBar onPress ={this.props.onPress} onDel = {this.props.onDel}/>
                    </View>
                    <Text style={styles.head_text}>Select button to delete</Text>
                    <View style={styles.del_pad_container}>
                        {this.props.buttons.map((value, idx) => <CustomButton
                        key={idx} 
                        title={value}
                        onPress={(e)=>this.props.btnPress(this.props.buttons.indexOf(value))}
                        style={(value === null) ? {backgroundColor: 'gray'} : null}
                        textStyle={{}}
                        borderStyle={(this.props.buttons[this.props.sel] === value && this.props.sel !== -1) ? styles.delete_button_select : null}
                        disable={(value === null) ? true : false}
                        />)}
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
    del_pad_container:{
        flex:4,
        paddingLeft:10,
        flexDirection: 'row', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 0
    },
    delete_button_select:{
        backgroundColor:'red',
        borderRadius:10,
    }
})