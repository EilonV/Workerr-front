const initialState = {
  orders: [],
  filterBy: {
    buyer: '',
    seller: '',
    createdAt: '',
  },
  page: null,
}
export function orderReducer(state = initialState, action) {
  var newState = state
  var orders
  // var page

  switch (action.type) {
    case 'SET_ORDERS':
      newState = { ...state, orders: action.orders }
      break
    case 'REMOVE_ORDER':
      const lastRemovedGig = state.orders.find(
        (order) => order._id === action.orderId
      )
      orders = state.orders.filter((order) => order._id !== action.orderId)
      newState = { ...state, orders, lastRemovedGig }
      break
    case 'ADD_ORDER':
      newState = { ...state, orders: [...state.orders, action.order] }
      break
    case 'UPDATE_ORDER':
      orders = state.orders.map((order) =>
        order._id === action.order._id ? action.order : order
      )
      newState = { ...state, orders }
      break
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }
    default:
      newState = state
  }
  // For debug:
  // window.orderState = newState
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  return newState
}
