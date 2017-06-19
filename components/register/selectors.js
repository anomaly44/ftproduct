/**
 * Registration selectors
 */

import { createSelector } from 'reselect'

const selectRegister = (state) => state.get('register');

const selectSubmitting = createSelector(
  selectRegister,
  (state) => state.get('submitting'));

const selectSubmitted = createSelector(
  selectRegister,
  (state) => state.get('submitted'));

const selectStep = createSelector(
  selectRegister,
  (state) => state.get('step'));

const selectData = createSelector(
  selectRegister,
  (state) => state.get('data'));

export {
  selectSubmitting,
  selectSubmitted,
  selectStep,
  selectData,
}
