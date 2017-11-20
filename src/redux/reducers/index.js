import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import records from './records'

export const rootReducer = combineReducers({
  records,
  form: formReducer
})
