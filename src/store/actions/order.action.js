import { orderService } from '../../services/order.service'

export function loadOrders() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().orderModule
    try {
      const orders = await orderService.query(filterBy)
      dispatch({ type: 'SET_ORDERS', orders })
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function removeOrder(orderId, cb) {
  return async (dispatch) => {
    try {
      await orderService.remove(orderId)
      dispatch({ type: 'REMOVE_ORDER', orderId })
      cb()
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function addOrder(order, cb) {
  return async (dispatch) => {
    try {
      const savedOrder = await orderService.save(order)
      console.log('savedOrder:', savedOrder)

      dispatch({ type: 'ADD_ORDER', order: savedOrder })
      cb()
    } catch (err) {
      console.error('Oops:', err)
    }
  }
}

export function updateOrder(order) {
  return async (dispatch) => {
    try {
      const updatedOrder = orderService.changeStatus(order)
      const action = { type: 'UPDATE_ORDER', order: updatedOrder }
      dispatch(action)
    } catch (err) {
      console.log('err', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
