import { Provider } from 'react-redux'
import { applyMiddleware, createStore as reduxCreateStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '.'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const createStore = reduxCreateStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default ({ element }) => (
  <Provider store= { createStore() } > { element } < /Provider>
)