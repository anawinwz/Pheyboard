import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View} from 'react-native'
import DeleteSettingBar from '../components/delete_setting_bar'
import {CustomButton} from '../components/custom-btn'

import { connect } from 'react-redux';
class DeletePage extends Component{
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
                        {this.props.buttons.map((button, idx) => <CustomButton
                        key={idx} 
                        title={(button === null) ? null : button.name}
                        onPress={(e)=>this.props.btnPress(idx)}
                        style={(button === null) ? {backgroundColor: '#212121'} : {backgroundColor: button.color}}
                        textStyle={{}}
                        borderStyle={(this.props.buttons[this.props.sel] === button && this.props.sel !== -1) ? styles.delete_button_select : null}
                        disable={(button === null) ? true : false}
                        />)}
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modals_del:{
        backgroundColor:"#151515",
        flex:1
    },
    del_setting_container:{
        flex:1
    },
    head_text:{color: 'white', fontSize:36, textAlign: 'center'},
    del_pad_container:{
        flex:4,
        flexDirection: 'row', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 0
    },
    delete_button_select:{
        backgroundColor:'#a6151a',
        borderRadius:10,
    }
})
const mapStateToProps = function(state) {
    return {
        buttons: state.macros.sets[state.macros.selectedSet].buttons
    }
}
export default connect(mapStateToProps)(DeletePage);