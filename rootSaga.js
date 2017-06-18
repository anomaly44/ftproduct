import { all } from 'redux-saga/effects'
import register from './components/register/sagas'

export default function* IndexSaga() {
  yield all([
    register()
  ])
}
