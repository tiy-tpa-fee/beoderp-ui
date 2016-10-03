import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import count from './count'

export default combineReducers({
  count,
  routing
})
