import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';
import SettingBar from './components/setting_bar'
import {CustomButton} from './components/custom-btn'
import DeletePage from './pages/delete_btn_page'
import CreatePage from './pages/create_btn_page'
import AddPage from './pages/add_btn_page'
import ChangePage from './pages/change_set_page'

export default class HelloWorldApp extends Component {
  state  = {int:0, isDel:false, selMem:-1, selCol:-1, isCre:false, isAdd:false,addMem:-1,isChange:false}
  buttons = [
    {name: 'Copy', Input1: 'Ctrl', Input2: 'C', Input3: null, Input4: null},
    {name: 'Paste', Input1: 'Ctrl', Input2: 'V', Input3: null, Input4: null},
    null, null, null, null, null, null, null, null, null, null
  ]
  buttonColor = ['white','red','yellow','green','blue']
  headerText = ['Sample Shortcut']
  temp_button = {name:'', Input1: null, Input2: null, Input3: null, Input4: null, color: 'white'}

  //function listener from the delete page
  setSelMem(mem){
    var idMem = this.state.selMem;
    this.buttons[mem] !== null ? idMem = mem : idMem = -1;
    console.log("the button is selected: "+idMem);
    this.setState({selMem:idMem});
  }
  setSelCol(col){
    this.setState({selCol:col});
  }
  //find what button is selected
  addMem(mem){
    var idMem = this.state.selMem;
    this.buttons[mem] === null ? idMem = mem : idMem = -1;
    console.log("the button is selected: "+idMem);
    this.setState({addMem:idMem});
  }
  BindTempName(returnName){
    this.temp_button.name = returnName;
  }
  delPressHandler = () =>{
    this.setState({isDel: !this.state.isDel, selMem:-1})
  }
  delMember = () =>{
    if(this.state.selMem !== -1){
      //set the button to null
      this.buttons[this.state.selMem] = null;
      this.setState({isDel: !this.state.isDel, selMem:-1})
    }
  }
  addMemberHandler = () =>{
    if(this.state.addMem !== -1 && this.temp_button.name !== ''){
      this.buttons[this.state.addMem] = {
        name: this.temp_button.name,
        Input1: null, Input2: null, Input3: null, Input4: null
      }
      this.temp_button.name='';
      this.setState({isAdd: !this.state.isAdd,addMem:-1})
      console.log("new member is added to arr")
      console.log(this.buttons)
    }
  }
  createPressHandler = () =>{
    this.setState({isCre: !this.state.isCre, selCol: -1})
    this.temp_button.name = ''
    this.temp_button.color = 'white'
  }
  addPressHandler = () =>{
    this.setState({isAdd: !this.state.isAdd, isCre: !this.state.isCre})
  }
  changePressHandler = () =>{
    this.setState({isChange: !this.state.isChange})
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
        tempColor={this.temp_button.color}
        buttonColor={this.buttonColor}
        onAdd={this.addPressHandler}
        btnPress={this.setSelCol.bind(this)}
        sel = {this.state.selCol}
        crePress={this.BindTempName.bind(this)}
      />
      <AddPage
        isAdd={this.state.isAdd}
        onPress={this.addPressHandler} 
        tempName={this.temp_button.name}
        buttons={this.buttons}
        onAdd={this.addMem.bind(this)}
        sel = {this.state.addMem}
        confirm={this.addMemberHandler}
      />
      <ChangePage
        isChange={this.state.isChange}
        onPress={this.changePressHandler} 
      />
      <View style={styles.setting_container}>
        <SettingBar 
          CrePress={this.createPressHandler} 
          DelPress={this.delPressHandler} 
          ChangePress={this.changePressHandler}
        />      
      </View>
      <Text style={styles.pad_name}>{this.headerText[0]}</Text>
      <View style={styles.key_pad_container}>
        {this.buttons.map((button, idx) => <CustomButton
        key={idx} 
        title={(button === null) ? null : button.name}
        onPress={()=>(button === null) ? null : Alert.alert(`${button.name} - ${button.Input1}+${button.Input2}+${button.Input3}+${button.Input4}`)}
        style={(button === null) ? {backgroundColor: 'gray'} : null}
        textStyle={{}}
        borderStyle={{}}
        disable={(button === null) ? true : false}
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
