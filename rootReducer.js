import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import register from './components/register/reducer'

export default combineReducers({
  register,
  form,
});
