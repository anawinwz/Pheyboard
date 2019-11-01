import React,{Component} from 'react'
import {TouchableHighlight,Image,Modal,StyleSheet,Text,TextInput,View} from 'react-native'
import {CustomButton} from '../components/custom-btn'
import {BackButton} from '../components/back_button'

export default class CreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            tempName: this.props.tempName,
            modalVisible: !this.props.isCre
        };
    }
    backHandler = ()=>{
        this.setState({tempName:""})
        this.props.onPress()
        console.log(this.state.tempName)
    }
    BindTempName = ()=>{
        this.props.onAdd()
        this.props.btnPress(this.state.tempName)
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
                        <BackButton onClick={this.backHandler}/>                        
                    </View>
                    <View style={styles.tempButton}>
                        <View style={styles.preview}>
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
        flex:5,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    createButton_area:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    circle:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        height:100,
        borderBottomRightRadius:200,
        borderTopRightRadius:200,
        backgroundColor:"white"
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
        backgroundColor:"white",
        display: "flex",
        margin: 10
    }
})