import { createStore, combineReducers, applyMiddleware } from 'redux'
import operationReducer from './reducers/operations'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  operationReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;
