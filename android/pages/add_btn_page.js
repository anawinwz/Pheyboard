import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,Alert} from 'react-native'
import AddSettingBar from '../components/add_setting_bar'
import {AddButton} from '../components/add_button'

import { connect } from 'react-redux';

class AddPage extends Component{
    constructor(props){
        super(props)
        this.btns = []
    }
    componentDidUpdate() {
        this.btns = [...this.props.buttons]
        this.mapButton();
    }
    mapButton(){
        var j = 0;var i =0;
        for(i=0;i<this.btns.length;i++){
            if(this.btns[i] === null){
                this.btns[i] = j
                j++
            }
        }
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
                        <AddSettingBar onPress ={this.props.onPress} tempName={this.props.tempName} onClick={this.props.confirm}/>
                    </View>
                    <Text style={styles.head_text}>Select button to add</Text>
                    <View style={styles.add_pad_container}>
                        {this.btns.map((button,idx)=><AddButton
                            key={idx}
                            title ={numReg.test(button) ? button : button.name}
                            onPress={()=>this.props.onAdd(idx)}
                            style={numReg.test(button) ? {backgroundColor: 'gray'} : null}
                            borderStyle={(this.btns[this.props.sel] === button && this.props.sel !== -1) ? styles.add_button_select : null}
                        />)}
                    </View>
                </View>
            </Modal>
        )
    }
}
const numReg = RegExp('[1234567890]')
const styles = StyleSheet.create({
    modals_del:{
        backgroundColor:"black",
        flex:1
    },
    del_setting_container:{
        flex:1
    },
    head_text:{color: 'white', fontSize:20, textAlign: 'center'},
    add_pad_container:{
        flex:4,
        paddingLeft:10,
        flexDirection: 'row', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 0
    },
    add_button_select:{
        backgroundColor:'green',
        borderRadius:10,
    }
})

const mapStateToProps = function(state) {
    return {
        buttons: state.macros.sets[state.macros.selectedSet].buttons
    }
}
export default connect(mapStateToProps)(AddPage);
//export default AddPage;