import { fromJS } from 'immutable';

import {
  SUBMIT_MESSAGE,
  SUBMIT_MESSAGE_SUCCESS,
  SUBMIT_MESSAGE_ERROR
} from './constants';

const initialState = fromJS({
  submitting: false,
  submitted: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return state
        .set('submitting', true)
        .set('submitted', false);
    case SUBMIT_MESSAGE_SUCCESS:
      return state
        .set('submitting', false)
        .set('submitted', true);
    case SUBMIT_MESSAGE_ERROR:
      return state
        .set('submitting', false)
        .set('submitted', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export function submitMessage(data, resolve, reject) {
  return {
    type: SUBMIT_MESSAGE,
    data,
    resolve,
    reject,
  };
}

export function messageSubmitted(data) {
  return {
    type: SUBMIT_MESSAGE_SUCCESS,
    data: data
  };
}

export function submitMessageError(error) {
  return {
    type: SUBMIT_MESSAGE_ERROR,
    error
  }
}

export default reducer;
