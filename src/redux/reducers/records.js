import { GET_RECORDS, ADD_RECORD_SUCCESS, DELETE_RECORD } from '../actions/records'
const initialState = [
  {
    id: 1,
    name: 'Angry Vape',
    description: 'Diego bull',
    initialPrice: 200,
    price: 280,
    priceDifference: 80
  },
  {
    id: 2,
    name: 'Angry Vape',
    description: 'David monkey',
    initialPrice: 200,
    price: 280,
    priceDifference: 80
  },
  {
    id: 3,
    name: 'Jam monster',
    description: 'Grape',
    initialPrice: 1000,
    price: 1300,
    priceDifference: 300
  },
  {
    id: 4,
    name: 'Jam monster',
    description: 'Apple',
    initialPrice: 1000,
    price: 1300,
    priceDifference: 300
  }
]

export default function records (state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS:
      return action.payload
    case ADD_RECORD_SUCCESS:
      return [...state, action.payload]
    case DELETE_RECORD:
      return [...state.filter(record => record.id !== action.payload)];
    default:
      return state
  }
}
