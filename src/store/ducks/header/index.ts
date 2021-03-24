import initialState from './initialState'
import reducers from './reducers'
import * as sagas from './sagas'
import * as selectors from './selectors'

const headerDuck = {
  reducers,
  initialState,
  sagas,
  selectors,
}

export default headerDuck
