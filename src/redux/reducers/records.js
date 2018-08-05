import { GET_RECORDS, ADD_RECORD_SUCCESS, DELETE_RECORD } from '../actions/records'
const initialState = []

export default function records (state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS:
      return [...state, ...action.payload]
    case ADD_RECORD_SUCCESS:
      return [...state, action.payload]
    case DELETE_RECORD:
      return [...state.filter(record => record.id !== action.payload)];
    default:
      return state
  }
}
