import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { loadOrders } from '../store/actions/order.action'

export const Orders = () => {
  const params = useParams()
  const orders = useSelector((state) => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadOrders())
  }, [])

  if (!orders) return ''

  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories orders={orders} />
      <div className='features'>
        <h1>Your orders</h1>
        <div className='table-orders'>
          {orders.map((order) => (
            <table key={order._id} order={order}>
              <tr>
                <th> DATE </th>
                <th> BUYER </th>
                <th> GIG</th>
                <th> Seller name </th>
                <th> Price</th>
                <th> Status </th>
              </tr>
              <td>{order.createdAt} </td>
              <td>{order.buyer} </td>
              <td>{order.gig._id} </td>
              <td>{order.seller} </td>
              <td>${order.gig.price} </td>
              <td>{order.status} </td>
            </table>
          ))}
        </div>
      </div>
    </section>
  )
}
