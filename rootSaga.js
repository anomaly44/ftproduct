import { all } from 'redux-saga/effects'

import register from './components/register/sagas'
import contact from './components/contact/sagas'

export default function* IndexSaga() {
  yield all([
    register(),
    contact(),
  ])
}
