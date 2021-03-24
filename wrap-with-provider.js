import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore as reduxCreateStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import loginReducer from './src/store/ducks/login/reducers';
// import profileReducer from './src/store/ducks/profile/reducers';
// import sidebarActionReducers from './src/store/ducks/sidebar/actions/reducers';
// import header from './src/store/reducers/header';
// import sidebar from './src/store/reducers/sidebar';
// import visibilityFilter from './src/store/reducers/visibility';
import rootSaga from './src/store/sagas';
import { reducers as rootReducer } from './src/store/rootReducer'

// import createStore from "./src/store"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const initialState = {}

  const sagaMiddleware = createSagaMiddleware()

  // const reducer = combineReducers({
  //   header,
  //   visibilityFilter,
  //   sidebar,
  //   loginReducer,
  //   profileReducer,
  //   sidebarActionReducers
  // })
  const store = reduxCreateStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return <Provider store={store}>{element}</Provider>
}

