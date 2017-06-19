import { SUBMIT_REGISTRATION_DATA} from './constants'
import { takeLatest, put, select } from 'redux-saga/effects'
import { registrationDataSubmitted, submitRegistrationDataError} from './reducer'
import { selectData } from './selectors'
import { requestSaga } from '../../utils/request'

export function* submitRegistrationData(action) {
  const requestUrl = '/api/registerAgency';
  try {
    const data = yield select(selectData);
    const registrationData = data
      .setIn(['account', 'email'], action.data.get('email'))
      .setIn(['account', 'password'], action.data.get('password'))
      .set('subdomain', action.data.get('subdomain'))
      .set('type', action.data.get('type'))
      .set('version', action.data.get('version'));
    yield requestSaga('POST', requestUrl, registrationData);
    yield put(registrationDataSubmitted(data));
    action.resolve();
  } catch (err) {
    yield put(submitRegistrationDataError(err.message));
    action.reject(err);
  }
}

export default function* watcher() {
  yield takeLatest(SUBMIT_REGISTRATION_DATA, submitRegistrationData);
}