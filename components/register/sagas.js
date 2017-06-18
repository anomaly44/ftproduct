import { SUBMIT_REGISTRATION_DATA} from './constants'
import { takeLatest, put } from 'redux-saga/effects'
import { registrationDataSubmitted, submitRegistrationDataError} from './reducer'
import { requestSaga } from '../../utils/request'

export function* submitRegistrationData(action) {
  const requestUrl = '/api/registerAgency';
  try {
    const data = yield requestSaga('POST', requestUrl);
    yield put(registrationDataSubmitted(data));
  } catch (err) {
    yield put(submitRegistrationDataError(err.message));
  }
}

export default function* watcher() {
  yield takeLatest(SUBMIT_REGISTRATION_DATA, submitRegistrationData);
}