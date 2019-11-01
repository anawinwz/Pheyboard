import React,{Component} from 'react'
import {Modal,StyleSheet,Text,View,Alert} from 'react-native'
import AddSettingBar from '../components/add_setting_bar'
import {AddButton} from '../components/add_button'
export default class AddPage extends Component{
    constructor(props){
        super(props)
        this.btn = [...this.props.buttons]
        this.mapButton();
    }
    mapButton(){
        var j = 0;var i =0;
        for(i=0;i<this.btn.length;i++){
            if(this.btn[i] === null){
                this.btn[i] = j
                j++
            }
        }
        console.log('new buttons is create')
        console.log(this.btn)
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
                    <Text style={styles.head_text}>Select button to add</Text>
                    <View style={styles.add_pad_container}>
                        {this.btn.map((value,idx)=><AddButton
                            key={idx}
                            title ={value}
                            onPress={()=>this.props.onAdd(this.btn.indexOf(value))}
                            borderStyle={(this.btn[this.props.sel] === value && this.props.sel !== -1) ? styles.add_button_select : null}
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