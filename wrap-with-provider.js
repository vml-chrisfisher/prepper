import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, combineReducers, createStore as reduxCreateStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import header from './src/store/reducers/header'
import visibilityFilter from './src/store/reducers/visibility'
import rootSaga from './src/store/sagas'

// import createStore from "./src/store"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const initialState = {}

  const sagaMiddleware = createSagaMiddleware()

  const reducer = combineReducers({
    header,
    visibilityFilter
  })

  const store = reduxCreateStore(reducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return <Provider store={store}>{element}</Provider>
}



