const isEmpty = value => value === undefined || value === null || value === '';

export const required = value => (isEmpty(value)) ? 'Verplicht' : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const email = value =>
  (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? 'Invalid email address' : undefined;

export const isChecked = value => (value === true) ? undefined : 'Required';
