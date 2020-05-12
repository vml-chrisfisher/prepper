import { combineReducers, createStore as reduxCreateStore } from 'redux';
import header from './reducers/header';
import visibilityFilter from './reducers/visibility';

const initialState = {}

const reducer = combineReducers({
  header,
  visibilityFilter
})

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore