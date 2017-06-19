import { createSelector } from 'reselect'

const selectContact = (state) => state.get('contact');

const selectSubmitting = createSelector(
  selectContact,
  (state) => state.get('submitting'));

const selectSubmitted = createSelector(
  selectContact,
  (state) => state.get('submitted'));


export {
  selectSubmitting,
  selectSubmitted,
}