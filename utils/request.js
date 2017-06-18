import 'whatwg-fetch';
import { call } from 'redux-saga/effects'


/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  return parseJSON(response)
    .then(parsedResponse => {
      console.log(parsedResponse);
      const error = new Error(parsedResponse.error);
      error.statusText = response.statusText;
      throw error;
    });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function* requestSaga(method, url, data) {
  const headers = {
    'Content-Type': 'application/json'
  };
  const options = {
    method: method,
    headers: headers
  };

  if (data) options.body = JSON.stringify(data);

  return yield call(request, `${API_URL}${url}`, options);
}