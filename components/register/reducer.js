import { fromJS } from 'immutable';
import { trackCustomEvent } from '../../utils/analytics'

import {
  SUBMIT_REGISTRATION_DATA,
  SUBMIT_REGISTRATION_DATA_SUCCESS,
  SUBMIT_REGISTRATION_DATA_ERROR,
  STORE_STEP1,
} from './constants';

const initialState = fromJS({
  submitting: false,
  submitted: false,
  step: 1,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_STEP1:
      const data = fromJS({
        address: {
          street: action.data.get('street'),
          number: action.data.get('number'),
          bus: action.data.get('bus'),
          zip: action.data.get('zip'),
          city: action.data.get('city'),
        },
        account: {
          firstName: action.data.get('firstName'),
          lastName: action.data.get('lastName'),
        },
        name: action.data.get('name'),
        tel: action.data.get('tel'),
        tel2: action.data.get('tel2'),
      });
      return state
        .set('data', data)
        .set('step', 2);
    case SUBMIT_REGISTRATION_DATA:
      return state
        .set('submitting', true)
        .set('submitted', false);
    case SUBMIT_REGISTRATION_DATA_SUCCESS:
      return state
        .set('submitting', false)
        .set('submitted', true);
    case SUBMIT_REGISTRATION_DATA_ERROR:
      return state
        .set('submitting', false)
        .set('submitted', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export function submitRegistrationData(data, resolve, reject) {
  return {
    type: SUBMIT_REGISTRATION_DATA,
    data,
    resolve,
    reject,
  };
}

export function registrationDataSubmitted(data) {
  return {
    type: SUBMIT_REGISTRATION_DATA_SUCCESS,
    data: data
  };
}

export function submitRegistrationDataError(error) {
  return {
    type: SUBMIT_REGISTRATION_DATA_ERROR,
    error
  }
}

export function storeStep1(data) {
  trackCustomEvent('trial', 'Step 1 submitted');
  return {
    type: STORE_STEP1,
    data,
  }
}

export default reducer;
