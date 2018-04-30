import { SET_OPERATION } from '../types/operation';

export const storeOperation = (operation) => {
  return dispatch => {
    dispatch({
      type: SET_OPERATION,
      payload: {
        operation
      }
    })
  }
}
