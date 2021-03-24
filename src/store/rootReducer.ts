import { combineReducers } from 'redux'
import loginReducer from './ducks/login/reducers'
import profileReducer from './ducks/profile/reducers'
import sidebarActionReducers from './ducks/sidebar/actions/reducers'
import header from './reducers/header'
import sidebar from './reducers/sidebar'
import visibilityFilter from './reducers/visibility'

export const reducers = combineReducers({
  header,
  visibilityFilter,
  sidebar,
  loginReducer,
  profileReducer,
  sidebarActionReducers,
})

export type AppState = ReturnType<typeof reducers>
