import * as localStorage from './localStorage';

export function log(params, type = null) {
  console.log(type, params);
}

/**
 * This method is used to set the token in localStorage.
 * @param {*} refreshToken
 * @param {*} accessToken
 * @returns true | false
 */
export async function setTokens(refreshToken, accessToken) {
  try {
    await localStorage.setItem('refreshToken', refreshToken);
    await localStorage.setItem('token', accessToken);
    return true;
  } catch (error) {
    return false;
  }
}
