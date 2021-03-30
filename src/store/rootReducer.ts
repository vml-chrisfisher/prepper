import { combineReducers } from 'redux'
import billingReducers from './ducks/billing/reducers'
import emailPreferencesReducers from './ducks/emailPreferences/reducers'
import groceriesReducers from './ducks/groceries/reducers'
import headerReducers from './ducks/header/reducers'
import householdReducers from './ducks/household/reducers'
import loginReducer from './ducks/login/reducers'
import profileReducer from './ducks/profile/reducers'
import shipmentsReducers from './ducks/shipments/reducers'
import sidebarActionReducers from './ducks/sidebar/actions/reducers'
import sidebar from './ducks/sidebar/actions/reducers'

export const reducers = combineReducers({
  header: headerReducers,
  sidebar,
  login: loginReducer,
  profile: profileReducer,
  sidebarActions: sidebarActionReducers,
  household: householdReducers,
  shipments: shipmentsReducers,
  groceries: groceriesReducers,
  emailPreferences: emailPreferencesReducers,
  billing: billingReducers,
})

export type AppState = ReturnType<typeof reducers>
