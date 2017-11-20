
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
    case 'getRecords':
      return action.payload
    default:
      return state
  }
}
