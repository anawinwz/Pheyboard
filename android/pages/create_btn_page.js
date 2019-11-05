import React,{Component} from 'react'
import {TouchableWithoutFeedback,TouchableHighlight,Keyboard,Modal,StyleSheet,Text,TextInput,View,Alert} from 'react-native'
import {InputMacro} from '../components/input-macro-btn'
import {BackButton} from '../components/back_button'
import {CustomCircle} from '../components/custom-circle'
import Dialog from 'react-native-dialog'


export default class CreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempName: this.props.tempName,
            showAddDialog:false,
            showEditDialog:false,
            showNothingDialog:false,
            addBtnState:0 // position of the button 
        };
    }
    tempBtn = ''
    buttonShortCut = [null,null,null,null]
    buttonColor = ['white','#db1d1d','#dbc81d','#3bdb1d','#1d89db']
    backHandler = ()=>{
        //reset local state
        this.setState({tempName:""})
        this.setState({addBtnState:0})
        this.buttonShortCut=[null,null,null,null]
        this.props.onPress()
    }
    BindTempButton = ()=>{
        if(this.state.addBtnState > 0)
        {
            this.props.onAdd()
            this.props.crePress(this.state.tempName)
            this.props.arrRtn(this.buttonShortCut)
            this.props.bindCol(this.props.sel)
            //reset local state
            this.setState({tempName:""})
            this.setState({addBtnState:0})
            this.buttonShortCut=[null,null,null,null]
        }
        else
        {
            this.handleNothingConfirm()
        }
    }
    toogleAddDialog = () =>{
        this.setState({showAddDialog:!this.state.showAddDialog})
        console.log(this.state)
    }
    toogleEditDialog = () =>{
        this.setState({showEditDialog:!this.state.showEditDialog})
        console.log(this.state)
    }
    handleDelete= ()=>{
        if(this.state.addBtnState > 0)
        {
            this.buttonShortCut[this.state.addBtnState - 1] = null
            this.setState({addBtnState:this.state.addBtnState - 1})
        }
        this.tempBtn = ''
        this.setState({showEditDialog:!this.state.showEditDialog})
    }
    handleAddCancel= ()=>{
        this.setState({showAddDialog:!this.state.showAddDialog})
    }
    handleAddConfirm = () => {
        if(this.tempBtn !== '' && this.state.addBtnState < 4){
            this.buttonShortCut[this.state.addBtnState] = this.tempBtn
            this.tempBtn = ''
            this.setState({showAddDialog:!this.state.showAddDialog,addBtnState:this.state.addBtnState + 1})
        }else{
            Alert.alert('You enter nothing....')
            this.setState({showAddDialog:!this.state.showAddDialog})
        }
    }
    handleEditCancel= ()=>{
        this.setState({showEditDialog:!this.state.showEditDialog})
    }
    handleEditConfirm = () => {
        if(this.tempBtn !== ''){
            this.buttonShortCut[this.state.addBtnState - 1] = this.tempBtn
            this.tempBtn = ''
            this.setState({showEditDialog:!this.state.showEditDialog})
        }else{
            Alert.alert('You enter nothing....')
            this.setState({showEditDialog:!this.state.showEditDialog})
        }
    }
    handleNothingConfirm = () => {
        this.setState({showNothingDialog:!this.state.showNothingDialog})
    }
    hadleShort = (short) =>{
        this.tempBtn = short
    }
    render(){
        return(
            <Modal 
                    animationType = {'none'}
                    transparent={false}
                    visible = {this.props.isCre}
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style ={styles.modals_create}>
                        <View style={styles.create_wrapper}>
                            <BackButton onClick={this.backHandler} style={{width:100,height:75}}/>                        
                        </View>
                        <View style={styles.tempButton}>
                            <View style={[styles.preview,(this.props.sel !== -1)?{backgroundColor:this.buttonColor[this.props.sel]}:null]}>
                                <Text style={{fontSize:20}}>{this.state.tempName}</Text>
                            </View>
                            <Text style={styles.button_name}>Button Name</Text>
                            <TextInput
                                style={styles.name_input_box}
                                onChangeText={(tempName) => this.setState({tempName})}
                                value={this.state.tempName}
                                maxLength={24}
                            />
                        </View>
                        <View style={{position: 'absolute', top: 320, left: 0, right: 0}}>
                            <Text style={styles.button_name}>Button Input</Text>
                            <View style={styles.input_shortcut}>
                            {this.buttonShortCut.map((val,idx)=>
                                    <InputMacro
                                        state = {this.state.addBtnState}
                                        pos={idx}
                                        key={idx}
                                        keyMacro={val}
                                        onPress={this.toogleAddDialog}
                                        EditPress={this.toogleEditDialog}
                                    />                            
                                )}
                                    <Dialog.Container visible={this.state.showAddDialog}>
                                        <Dialog.Title style={{fontSize:24}}>Insert Macro Input</Dialog.Title>
                                        <Dialog.Input style={{fontSize:18}} placeholder="Type input here!" onChangeText={(short)=>this.hadleShort(short)}></Dialog.Input>
                                        <Dialog.Button label="Cancel" onPress={this.handleAddCancel} />
                                        <Dialog.Button label="Add" onPress={this.handleAddConfirm} />
                                    </Dialog.Container>
                                    <Dialog.Container visible={this.state.showEditDialog}>
                                        <Dialog.Title style={{fontSize:24}}>Edit Macro Input</Dialog.Title>
                                        <Dialog.Input style={{fontSize:18}} placeholder="Type input here!" onChangeText={(short)=>this.hadleShort(short)}></Dialog.Input>
                                        <Dialog.Button label="Delete" onPress={this.handleDelete} />
                                        <Dialog.Button label="Cancel" onPress={this.handleEditCancel} />
                                        <Dialog.Button label="Edit" onPress={this.handleEditConfirm} />
                                    </Dialog.Container>
                                    <Dialog.Container visible={this.state.showNothingDialog}>
                                        <Dialog.Title style={{fontSize:24}}>Can't Create Button</Dialog.Title>
                                        <Dialog.Description>Required at least 1 Button Input to Create Button</Dialog.Description>
                                        <Dialog.Button label="OK" onPress={this.handleNothingConfirm} />
                                    </Dialog.Container>
                            </View>
                        </View>
                        <View style={{position: 'absolute', top: 455, left: 0, right: 0}}>
                            <Text style={styles.button_name}>Button Color</Text>
                            <View style={styles.input_shortcut}>
                                {this.props.buttonColor.map((value,idx)=>
                                    <CustomCircle
                                        key={idx}
                                        style={{width:50,height:50,borderRadius:25,backgroundColor:value,borderWidth:5,borderColor:'#151515'}}
                                        onPress={()=>this.props.btnPress(idx)}
                                        borderStyle={(this.props.buttonColor[this.props.sel] === value && this.props.sel !== -1) ? styles.color_select : null}
                                    />)}
                            </View>
                        </View>
                        <View style={styles.createButton_area}>
                            <TouchableHighlight underlayColor="white" style={styles.createButton} onPress={this.BindTempButton}>
                                <Text style={styles.button_name}>Create Button</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modals_create:{
        flex:1,
        backgroundColor:"#151515"
    },
    create_wrapper:{
        flex:1,
        flexDirection:"row",
        paddingTop:15,
    },
    tempButton:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        position: 'absolute', 
        top: 100, 
        left: 0, 
        right: 0
    },
    input_wraper:{
    },
    input_shortcut:{
        flexDirection:"row",
        justifyContent:'center'
    },
    createButton_area:{
        justifyContent:"flex-start",
        alignItems:"center",
        position: 'absolute',
        top:600,
        left:0,
        right:0
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
        width:100,     
        height:100,    
        borderRadius:10,// change how round the box
        backgroundColor:'white',
        display: "flex",
        padding: 10,
        margin: 10
    },
    color_select:{
        borderRadius:50,
        backgroundColor:'white'
    }
})