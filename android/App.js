import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import SettingBar from './components/setting_bar'
import {CustomButton} from './components/custom-btn'
import DeletePage from './pages/delete_btn_page'
import CreatePage from './pages/create_btn_page'
import AddPage from './pages/add_btn_page'

export default class HelloWorldApp extends Component {
  state  = {int:0, isDel:false, selMem:-1, isCre:false, isAdd:false}
  buttons = ['Copy', 'Paste', null, null, null, null, null, null, null, null, null, null]
  headerText = ['Sample Shortcut']
  temp_button = {name:'', Input1:null, Input2:null, Input3:null, Input4:null}

  //function listener from the delete page
  setSelMem(mem){
    var idMem = this.state.selMem;
    this.buttons[mem] !== null ? idMem = mem : idMem = -1;
    console.log("the button is selected: "+idMem);
    this.setState({selMem:idMem});
  }
  delPressHandler = () =>{
    this.setState({isDel: !this.state.isDel})
    this.setState({selMem:-1})
  }
  delMember = () =>{
    if(this.state.selMem !== -1){
      //set the button to null
      this.buttons[this.state.selMem] = null;
      this.setState({isDel: !this.state.isDel})
      this.setState({selMem:-1})
    }
  }
  createPressHandler = () =>{
    this.setState({isCre: !this.state.isCre})
    this.temp_button.name = ''
  }
  addPressHandler = () =>{
    if(this.state.isCre === true)
    {
      this.setState({isCre: !this.state.isCre})
      this.setState({isAdd: !this.state.isAdd})
    }
  }

  render() {
    return (
    <View style={styles.main_container}>
      <DeletePage 
        isDel={this.state.isDel} 
        onPress={this.delPressHandler} 
        buttons={this.buttons} 
        btnPress={this.setSelMem.bind(this)} 
        sel={this.state.selMem} 
        onDel={this.delMember}
      />
      <CreatePage 
        isCre={this.state.isCre} 
        onPress={this.createPressHandler} 
        buttons={this.buttons} 
        tempName={this.temp_button.name}
        onAdd={this.addPressHandler}
      />
      <AddPage
        isAdd={this.state.isAdd}
      />
      <View style={styles.setting_container}>
        <SettingBar CrePress={this.createPressHandler} DelPress={this.delPressHandler}/>
      </View>
      <Text style={styles.pad_name}>{this.headerText[0]}</Text>
      <View style={styles.key_pad_container}>
        {this.buttons.map((value, idx) => <CustomButton
        key={idx} 
        title={value}
        onPress={()=>(value === null) ? null:Alert.alert(value)}
        style={(value === null) ? {backgroundColor: 'gray'} : null}
        textStyle={{}}
        borderStyle={{}}
        disable={(value === null) ? true : false}
        />)}
      </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container:{
    backgroundColor:"black",
    flex:1
  },
  setting_container:{
    flex:1
  },
  pad_name:{color: 'white', fontSize:36, textAlign: 'center'},
  key_pad_container:{
    flex:4,
    paddingLeft:10,
    flexDirection: 'row', 
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 0
  }
})
