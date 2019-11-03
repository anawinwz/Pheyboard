import React,{Component} from 'react'
import {TouchableHighlight,Image,Modal,StyleSheet,Text,TextInput,View,Alert} from 'react-native'
import {InputMacro} from '../components/input-macro-btn'
import {BackButton} from '../components/back_button'
import {CustomCircle} from '../components/custom-circle'
import Dialog from 'react-native-dialog'

export default class CreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempName: this.props.tempName,
            tempColor:this.props.tempColor,
            showDialog:false,
            addBtnState:0 // position of the button 
        };
    }
    buttonShortCut = [null,null,null,null]
    tempBtn = ''
    buttonColor = ['white','red','yellow','green','blue']
    backHandler = ()=>{
        this.setState({tempName:"",addBtnState:0,showDialog:false})
        this.props.onPress()
    }
    BindTempName = ()=>{
        this.props.onAdd()
        this.props.crePress(this.state.tempName)
        this.setState({tempName:""})
    }
    toogleDialog = () =>{
        this.setState({showDialog:!this.state.showDialog})
        console.log(this.state)
    }
    handleCancel= ()=>{
        this.setState({showDialog:!this.state.showDialog})
    }
    handleConfirm = () => {
        if(this.tempBtn !== ''){
            this.buttonShortCut[this.state.addBtnState] = this.tempBtn
            this.setState({showDialog:!this.state.showDialog,addBtnState:this.state.addBtnState + 1})
        }else{
            Alert.alert('You enter nothing....')
            this.setState({showDialog:!this.state.showDialog})
        }
    }
    hadleShort = (short : string) =>{
        this.tempBtn = short
    }
    render(){
        return(
            <Modal 
                    animationType = {'none'}
                    transparent={false}
                    visible = {this.props.isCre}
            >
                <View style ={styles.modals_create}>
                    <View style={styles.create_wrapper}>
                        <BackButton onClick={this.backHandler} style={{width:100,height:75}}/>                        
                    </View>
                    <View style={styles.tempButton}>
                        <View style={[styles.preview,(this.props.sel !== -1)?{backgroundColor:this.buttonColor[this.props.sel]}:null]}>
                            <Text>{this.state.tempName}</Text>
                        </View>
                        <Text style={styles.button_name}>Button Name</Text>
                        <TextInput
                            style={styles.name_input_box}
                            onChangeText={(tempName) => this.setState({tempName})}
                            value={this.state.tempName}
                            maxLength={24}
                        />
                    </View>
                    <View style={styles.input_wraper}>
                        <Text style={styles.button_name}>Button Input</Text>
                        <View style={styles.input_shortcut}>
                            {this.buttonShortCut.map((val,idx)=>
                                <InputMacro
                                    state = {this.state.addBtnState}
                                    pos={idx}
                                    keyMacro={val}
                                    onPress={this.toogleDialog}
                                />                            
                            )}
                                <Dialog.Container visible={this.state.showDialog}>
                                    <Dialog.Title>Test dialog</Dialog.Title>
                                    <Dialog.Input onChangeText={(short : string)=>this.hadleShort(short)}></Dialog.Input>
                                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                                    <Dialog.Button label="Confirm" onPress={this.handleConfirm} />
                                </Dialog.Container>
                        </View>
                    </View>
                    <View style={styles.input_wraper}>
                        <Text style={styles.button_name}>Button Color</Text>
                        <View style={styles.input_shortcut}>
                            {this.props.buttonColor.map((value,idx)=>
                                <CustomCircle
                                    key={idx}
                                    style={{width:50,height:50,borderRadius:25,backgroundColor:value,borderWidth:5,borderColor:'black'}}
                                    onPress={()=>this.props.btnPress(idx)}
                                    borderStyle={(this.props.buttonColor[this.props.sel] === value && this.props.sel !== -1) ? styles.color_select : null}
                                />)}
                        </View>
                    </View>
                    <View style={styles.createButton_area}>
                        <TouchableHighlight underlayColor="white" style={styles.createButton} onPress={this.BindTempName}>
                            <Text style={styles.button_name}>Create Button</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modals_create:{
        flex:1,
        backgroundColor:"black"
    },
    create_wrapper:{
        flex:1,
        flexDirection:"row",
        paddingTop:15,
    },
    tempButton:{
        flex:3,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    input_wraper:{flex:2},
    input_shortcut:{
        flexDirection:"row",
        justifyContent:'center'
    },
    createButton_area:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    button_name:{
        color: 'white', 
        fontSize:25, 
        textAlign: 'center'
    },
    button_content:{
        justifyContent:'center',
        alignItems:"center"
    },
    name_input_box:{
        textAlign:"center",
        width:300,     
        height:40,    
        borderRadius:10,
        backgroundColor:"white",
        display: "flex",
        margin: 10
    },
    createButton:{
        justifyContent:"center",
        alignItems:"center",
        width:330,     
        height:50,    
        borderRadius:10,
        backgroundColor:"green",
    },
    preview:{
        justifyContent:"center",
        alignItems:"center",
        width:90,     
        height:90,    
        borderRadius:10,// change how round the box
        backgroundColor:'white',
        display: "flex",
        margin: 10
    },
    color_select:{
        borderRadius:50,
        backgroundColor:'white'
    }
})