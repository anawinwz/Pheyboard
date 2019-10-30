import React,{Component} from 'react'
import {TouchableHighlight,Image,Modal,StyleSheet,Text,TextInput,View} from 'react-native'
import {CustomButton} from '../components/custom-btn'

export default class CreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {tempName: ''};
    }
    render(){
        return(
            <Modal 
                    animationType = {'none'}
                    transparent={false}
                    visible = {this.props.isAdd}
            >
                <View style ={styles.modals_create}>
                    <View style={styles.create_wrapper}>
                        <TouchableHighlight underlayColor="white" style={styles.circle} onPress={this.props.onPress}>
                            <View style={styles.button_content}>
                                <Image style={{width:50,height:50}} source={require('../assets/left.png')}/>
                                <Text style={{fontSize:14, top:5}}>Back</Text>
                             </View>
                        </TouchableHighlight>
                        
                    </View>
                    <View style={styles.tempButton}>
                        <CustomButton
                            title={this.state.tempName}
                            onPress={{}}
                            style={{backgroundColor: 'white'}}
                            textStyle={{}}
                            borderStyle={{}}
                            disable={true}
                        />
                        <Text style={styles.button_name}>Button Name</Text>
                        <View style={styles.name_input_box}>
                            <TextInput
                                style={{height: 50}}
                                onChangeText={(tempName) => this.setState({tempName})}
                                value={this.state.tempName}
                            />
                        </View>
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
    circle:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        height:100,
        borderBottomRightRadius:200,
        borderTopRightRadius:200,
        backgroundColor:"white"
    },
    tempButton:{
        flex:5,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    button_name:{
        color: 'white', 
        fontSize:30, 
        textAlign: 'center'
    },
    button_content:{
        justifyContent:'center',
        alignItems:"center"
    },
    name_input_box:{
        justifyContent:"center",
        alignItems:"center",
        width:330,     
        height:40,    
        borderRadius:10,
        backgroundColor:"white",
        display: "flex",
        margin: 10
    }
})