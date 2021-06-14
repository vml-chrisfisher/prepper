import { combineReducers } from 'redux'
import billingReducers from './ducks/billing/reducers'
import contactReducers from './ducks/contact/reducers'
import emailPreferencesReducers from './ducks/emailPreferences/reducers'
import groceriesReducers from './ducks/groceries/reducers'
import headerReducers from './ducks/header/reducers'
import householdReducers from './ducks/household/reducers'
import loginReducer from './ducks/login/reducers'
import newsletterReducers from './ducks/newsletter/reducers'
import profileReducer from './ducks/profile/reducers'
import recipesBoxReducers from './ducks/recipesBox/reducers'
import shipmentsReducers from './ducks/shipments/reducers'
import sidebarActionReducers from './ducks/sidebar/actions/reducers'
import sidebar from './ducks/sidebar/actions/reducers'

export const reducers = combineReducers({
  billing: billingReducers,
  contact: contactReducers,
  emailPreferences: emailPreferencesReducers,
  groceries: groceriesReducers,
  header: headerReducers,
  household: householdReducers,
  login: loginReducer,
  profile: profileReducer,
  recipesBox: recipesBoxReducers,
  sidebar,
  sidebarActions: sidebarActionReducers,
  shipments: shipmentsReducers,
  newsletter: newsletterReducers,
})

export type AppState = ReturnType<typeof reducers>
