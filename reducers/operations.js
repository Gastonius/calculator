import { SET_OPERATION } from '../types/operation';

const initState = {
  operations: []
}

export default (state = initState, action) => {
  switch(action.type) {
    case SET_OPERATION:
      const value = typeof action.payload.operation.result === 'object'
        ? action.payload.operation.result.value
        : action.payload.operation.result
      
      return {
        ...state, 
        operations: [{ operation: action.payload.operation.operation, result: value },...state.operations]
      }
    default:
      return state
  }
}
