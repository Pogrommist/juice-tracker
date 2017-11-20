export const ADD_RECORD_SUCCESS = 'records/ADD_RECORD_SUCCESS'
export const DELETE_RECORD = 'records/DELETE_RECORD'

export const GET_RECORDS = 'records/GET_RECORDS'

export function addRecord (data) {
  return dispatch => {
    dispatch({ type: ADD_RECORD_SUCCESS, payload: data })
  }
}

export function deleteRecord (id) {
  return dispatch => {
    dispatch({ type: DELETE_RECORD, payload: id });
  };
}
