import { combineReducers } from 'redux'

const DEFAULT_STATE = { 
  selectedSet: 0,
  sets: [
    {
      name: `Sample Shortcut`,
      buttons: [
        {name: 'Copy', Input1: 'Ctrl', Input2: 'C', Input3: null, Input4: null}, 
        {name: 'Paste', Input1: 'Ctrl', Input2: 'V', Input3: null, Input4: null},
        null, null, null, null, null, null, null, null, null, null
      ]
    },
    {
      name: `Sample Shortcut 2`,
      buttons: [
        null, null, null, null, null, null, null, null, null, null,
        {name: 'Copy', Input1: 'Ctrl', Input2: 'C', Input3: null, Input4: null}, 
        {name: 'Paste', Input1: 'Ctrl', Input2: 'V', Input3: null, Input4: null}
      ]
    }
  ]
}
function macros(state = DEFAULT_STATE, action) {
  let newState
  switch (action.type) {
    case 'CHANGE_SET':
      return {...state, selectedSet: action.idx}
    case 'ADD_SET':
      return {
        ...state,
        sets: [
          ...state.sets,
          {
            name: (action.name) ? action.name : `Untitled ${state.sets.length + 1}`,
            buttons: [null, null, null, null, null, null, null, null, null, null, null, null]
          }
        ]
      }
    case 'RENAME_SET':
         newState = state
      newState.sets[action.idx].name = action.name
      return newState
    case 'DELETE_SET':
         newState = state
      delete newState.sets[action.idx]
      if (action.idx == newState.selectedSet) {
        if (newState.sets.length > 0) newState.selectedSet = 0
        else newState.selectedSet = null
      }
      return newState
    case 'ADD_BUTTON':
         newState = state
      newState.sets[newState.selectedSet].buttons[action.idx] = {
        name: action.name,
        Input1: action.Input1, Input2: action.Input2, Input3: action.Input3, Input4: action.Input4
      }
      return newState
    case 'DELETE_BUTTON':
      newState = state
      newState.sets[newState.selectedSet].buttons[action.idx] = null
      return newState
    default:
      return state
  }
}

export default combineReducers({ macros })