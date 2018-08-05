import { fetchProducts, deleteProduct, createProduct } from '../../api/products'

export const ADD_RECORD_SUCCESS = 'records/ADD_RECORD_SUCCESS'
export const DELETE_RECORD = 'records/DELETE_RECORD'

export const GET_RECORDS = 'records/GET_RECORDS'

export function addRecord (data) {
  return dispatch => {
    createProduct(data).then(res => {
      dispatch({ type: ADD_RECORD_SUCCESS, payload: res.data })
    })
  }
}

export function deleteRecord (id) {
  return dispatch => {
    deleteProduct(id).then(res => {
      dispatch({ type: DELETE_RECORD, payload: id })
    })
  };
}

export function getProducts () {
  return dispatch => {
    fetchProducts().then(res => {
      dispatch({ type: GET_RECORDS, payload: res.data })
    })
  }
}
