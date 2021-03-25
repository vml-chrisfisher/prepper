import { combineReducers } from 'redux'
import headerReducers from './ducks/header/reducers'
import loginReducer from './ducks/login/reducers'
import profileReducer from './ducks/profile/reducers'
import sidebarActionReducers from './ducks/sidebar/actions/reducers'
import sidebar from './ducks/sidebar/actions/reducers'

export const reducers = combineReducers({
  headerReducers,
  sidebar,
  loginReducer,
  profileReducer,
  sidebarActionReducers,
})

export type AppState = ReturnType<typeof reducers>
