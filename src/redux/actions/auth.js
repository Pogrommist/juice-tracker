export const LOGIN = {
  success: 'auth/LOGIN_SUCCESS'
}

export function logIn (data) {
  return dispatch => {
    dispatch({ type: LOGIN.success, payload: data })
  }
}
