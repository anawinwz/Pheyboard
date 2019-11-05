/**
 * @format
 */

import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import CreateButton from '../pages/create_btn_page'
import {InputMacro} from '../components/input-macro-btn'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';
import add_btn_page from '../pages/add_btn_page';
import { InputMacro } from '../components/input-macro-btn';
let [onAdd, onPress, arrRtn,bindCol,backHandler] = new Array(3).fill(jest.fn());
const props ={
  onAdd: onAdd,
  isCre:true,
  sel:-1,
  onPress:onPress,
  arrRtn:arrRtn,
  bindCol:bindCol,
  backHandler:backHandler
}
function shallowSetup() {
  // Sample props to pass to our shallow render
  const props ={
    onAdd: onAdd,
    isCre:true,
    sel:-1,
    onPress:onPress,
    arrRtn:arrRtn,
    bindCol:bindCol,
    backHandler:backHandler
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<CreateButton {...props} />);

  return {
    props,
    enzymeWrapper
  };
}
it('should find at least one input macro button', () => {
  const {enzymeWrapper,props} = shallowSetup();
  expect(enzymeWrapper.find(InputMacro)).toExist();  
});
