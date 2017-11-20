
const initialState = {}

export default function records (state = initialState, action) {
  switch (action.type) {
    case 'getRecords':
      return action.payload
    default:
      return state
  }
}
