import { SUBMIT_MESSAGE} from './constants'
import { takeLatest, put} from 'redux-saga/effects'
import { messageSubmitted, submitMessageError} from './reducer'
import { selectData } from './selectors'
import { requestSaga } from '../../utils/request'

export function* submitMessage(action) {
  const requestUrl = '/api/message';
  try {
    yield requestSaga('POST', requestUrl, action.data);
    yield put(messageSubmitted());
    action.resolve();
  } catch (err) {
    yield put(submitMessageError(err.message));
    action.reject();
  }
}

export default function* watcher() {
  yield takeLatest(SUBMIT_MESSAGE, submitMessage);
}