import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,TouchableHighlight,Image} from 'react-native'
import ChangeSettingBar from '../components/change_setting_bar'
import Dialog from 'react-native-dialog'

import { connect } from 'react-redux';

class ChangePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            showRenameDialog: false,
            renameInput: '',
            renameTarget: null
        }
    }
    toggleRenameDialog(idx) {
        this.setState({showRenameDialog: !this.state.showRenameDialog, renameInput: this.props.sets[idx].name, renameTarget: idx})
    }
    handleRenameCancel() {
        this.setState({showRenameDialog: false, renameInput: '', renameTarget: null})
    }
    handleRenameConfirm() {
        this.props.dispatch({type: 'RENAME_SET', idx: this.state.renameTarget, name: this.state.renameInput})
        this.setState({showRenameDialog: false, renameInput: '', renameTarget: null})
    }
    handleRenameChange(text) {
        this.setState({renameInput: text})
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
                        <ChangeSettingBar onPress ={this.props.onPress} selectedSet={this.props.sets[this.props.selectedSet].name} dispatch={this.props.dispatch} />
                    </View>
                    <Text style = {styles.head_text}>Select set</Text>
                    <View style = {styles.pad_sets_container}>
                        {this.props.sets.map((set, idx) => (
                                <TouchableHighlight underlayColor="white" style={styles.set_member} key={idx}
                                onPress={() => {this.props.dispatch({type: 'CHANGE_SET', idx: idx}); this.props.btnPress(idx);}}>
                                    <View style={styles.set_member}>
                                        <View style={[styles.circle,(this.props.sets[this.props.sel] === set && this.props.sel !== -1) ? {backgroundColor : 'dodgerblue'} : {backgroundColor : 'white'} ]}/>
                                        <Text style={styles.set_name}>{set.name}</Text>
                                        <TouchableHighlight onPress={() => {this.toggleRenameDialog(idx)}}>
                                            <View style={styles.rename_icon}>
                                                <Image style={{width:35,height:35}} source={require('../assets/rename.png')}/>
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </TouchableHighlight>
                            )
                        )}
                        {this.props.sets.length < 8 && 
                        [...Array(8-this.props.sets.length).keys()].map((idx) => (
                                <TouchableHighlight underlayColor="white" style={styles.set_member} key={idx}
                                onPress={() => this.props.dispatch({type: 'ADD_SET' })}>
                                    <View style={styles.set_member}>
                                        <Text style={[styles.set_name,{marginLeft:10}]}>+ ADD NEW SET</Text>
                                    </View>
                                </TouchableHighlight>
                                )
                            )}
                    </View>
                    
                    <Dialog.Container visible={this.state.showRenameDialog}>
                        <Dialog.Title style={{fontSize:24}}>Insert set name</Dialog.Title>
                        <Dialog.Input style={{fontSize:18}} placeholder="Type set name here!" value={this.state.renameInput} onChangeText={this.handleRenameChange.bind(this)}></Dialog.Input>
                        <Dialog.Button label="Cancel" onPress={this.handleRenameCancel.bind(this)} />
                        <Dialog.Button label="Confirm" onPress={this.handleRenameConfirm.bind(this)} />
                    </Dialog.Container>
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
    pad_sets_container:{
        flex:4,
        alignItems:"center",
        alignContent:"center",
        flexDirection:"column",
        borderRadius:10,// change how round the box
        backgroundColor:"grey",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        marginTop: 10
    },
    set_member:{
        flexDirection:'row',
        alignItems:"center",
        backgroundColor:"grey",
        width:350,     
        height:58,    
        borderRadius:10,// change how round the box
        display: "flex",
    },
    set_name:{
        color: 'white', 
        fontSize:20,
        width: '68%'
    },
    circle:{
        backgroundColor: 'dodgerblue',
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth:5,
        borderColor:'white',
        margin: 10
    },
    rename_icon: {
        backgroundColor: 'grey',
        width: 50,
        height: 50,
        alignItems:'center',
        justifyContent:'center'
    }
})



const mapStateToProps = function(state) {
    return {
        selectedSet: state.macros.selectedSet,
        sets: state.macros.sets
    }
}
export default connect(mapStateToProps)(ChangePage);