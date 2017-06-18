import { fromJS } from 'immutable';

import {
  SUBMIT_REGISTRATION_DATA,
  SUBMIT_REGISTRATION_DATA_SUCCESS,
  SUBMIT_REGISTRATION_DATA_ERROR
} from './constants';

const initialState = fromJS({
  submitting: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function submitRegistrationData(data) {
  return {
    type: SUBMIT_REGISTRATION_DATA,
    data
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

export default reducer;
