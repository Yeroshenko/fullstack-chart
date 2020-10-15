import { combineReducers } from 'redux'

import dialogs from './dialogs'
import messages from './messages'

const rootReducer = combineReducers({
  dialogs,
  messages
})

export default rootReducer
