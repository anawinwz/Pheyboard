import React, { Component } from 'react';
import { StyleSheet,Text, View,Button,Alert,TouchableOpacity } from 'react-native';

import SettingBar from './components/setting_bar'
import {CustomButton} from './components/custom-btn'
import DeletePage from './pages/delete_btn_page'
import CreatePage from './pages/create_btn_page'
import AddPage from './pages/add_btn_page'
import ChangePage from './pages/change_set_page'

import { connect } from 'react-redux';

class Pheyboard extends Component {
  state  = {int:0, isDel:false, selMem:-1, isCre:false, isAdd:false,addMem:-1,isChange:false}
  temp_button = {name:'', Input1: null, Input2: null, Input3: null, Input4: null}

  //function listener from the delete page
  setSelMem(mem){
    var idMem = this.state.selMem;
    this.props.buttons[mem] !== null ? idMem = mem : idMem = -1;
    console.log("the button is selected: "+idMem);
    this.setState({selMem:idMem});
  }
  //find what button is selected
  addMem(mem){
    var idMem = this.state.selMem;
    this.props.buttons[mem] === null ? idMem = mem : idMem = -1;
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
      //MIGRATE REDUX - this.props.buttons[this.state.selMem] = null;
      this.props.dispatch({type: 'DELETE_BUTTON', idx: this.state.selMem})
      this.setState({isDel: !this.state.isDel, selMem:-1})
    }
  }
  addMemberHandler = () =>{
    if(this.state.addMem !== -1 && this.temp_button.name !== ''){
      /*MIGRATE REDUX -  this.props.buttons[this.state.addMem] = {
        name: this.temp_button.name,
        Input1: null, Input2: null, Input3: null, Input4: null
      } */
      this.props.dispatch({type: 'ADD_BUTTON', idx: this.state.addMem, 
        name: this.temp_button.name,
        Input1: null, Input2: null, Input3: null, Input4: null
      })
      this.temp_button.name='';
      this.setState({isAdd: !this.state.isAdd,addMem:-1})
      console.log("new member is added to arr")
      console.log(this.props.buttons)
    }
  }
  createPressHandler = () =>{
    this.setState({isCre: !this.state.isCre})
    this.temp_button.name = ''
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
        btnPress={this.setSelMem.bind(this)} 
        sel={this.state.selMem} 
        onDel={this.delMember}
      />
      <CreatePage 
        isCre={this.state.isCre} 
        onPress={this.createPressHandler} 
        tempName={this.temp_button.name}
        onAdd={this.addPressHandler}
        btnPress={this.BindTempName.bind(this)}
      />
      <AddPage
        isAdd={this.state.isAdd}
        onPress={this.addPressHandler} 
        tempName={this.temp_button.name}
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
      <Text style={styles.pad_name}>{this.props.headerText}</Text>
      <View style={styles.key_pad_container}>
        {this.props.buttons.map((button, idx) => <CustomButton
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

const mapStateToProps = function(state) {
  return {
    buttons: state.macros.sets[state.macros.selectedSet].buttons,
    headerText: state.macros.sets[state.macros.selectedSet].name
  }
}
export default connect(mapStateToProps)(Pheyboard);