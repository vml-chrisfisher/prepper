import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import header from './reducers/header'
import sidebar from './reducers/sidebar'
import visibilityFilter from './reducers/visibility'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  header,
  visibilityFilter,
  sidebar,
})

const createStore = () => reduxCreateStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default createStore
