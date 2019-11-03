import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,TouchableHighlight} from 'react-native'
import ChangeSettingBar from '../components/change_setting_bar'

import { connect } from 'react-redux';

class ChangePage extends Component{
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
                    <Text style = {styles.head_text}>Select set</Text>
                    <View style = {styles.pad_sets_container}>
                        {this.props.sets.map((set, idx) => (
                                <TouchableHighlight underlayColor="white" style={styles.set_member} key={idx}
                                onPress={() => this.props.dispatch({type: 'CHANGE_SET', idx: idx})}>
                                    <View style={styles.set_member}>
                                        <View style={styles.circle}/>
                                        <Text style={styles.set_name}>{set.name}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        )}
                        {this.props.sets.length < 8 && 
                        [...Array(8-this.props.sets.length).keys()].map((idx) => (
                                <TouchableHighlight underlayColor="white" style={styles.set_member} key={idx}
                                onPress={() => this.props.dispatch({type: 'ADD_SET' })}>
                                    <View style={styles.set_member}>
                                        <View style={styles.circle}/>
                                        <Text style={styles.set_name}>+ ADD NEW SET</Text>
                                    </View>
                                </TouchableHighlight>
                                )
                            )}
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
        flexDirection:"column",
        borderRadius:10,// change how round the box
        backgroundColor:"grey",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 0,
        marginTop: 10
    },
    set_member:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"grey",
        width:350,     
        height:60,    
        borderRadius:10,// change how round the box
        display: "flex",
    },
    set_name:{
        color: 'white', 
        fontSize:20
    },
    circle:{
        color: "white",
        width: 10,
        height: 10,
        borderRadius: 0,
        margin: 0
    }
})



const mapStateToProps = function(state) {
    return {
        selectedSet: state.macros.selectedSet,
        sets: state.macros.sets
    }
}
export default connect(mapStateToProps)(ChangePage);