import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import register from './components/register/reducer'
import contact from './components/contact/reducer'

export default combineReducers({
  register,
  contact,
  form,
});
