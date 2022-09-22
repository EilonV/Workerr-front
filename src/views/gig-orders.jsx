import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { loadOrders, removeOrder } from '../store/actions/order.action'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Location from '../assets/imgs/icons/location.svg'
import User from '../assets/imgs/icons/user.svg'

export const Orders = () => {
  // const params = useParams()
  const orders = useSelector((state) => state.orderModule.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadOrders())
  }, [])

  const onRemoveOrder = (orderId) => {
    dispatch(
      removeOrder(orderId, () => {
        // navigate('/orders')
      })
    )
  }

  const format = (time) => {
    new Date(time).getTime()
    return [
      new Date(time).getUTCDate(),
      '.',
      new Date(time).getMonth() + 1,
      '.',
      new Date(time).getFullYear(),
      '\n',
      new Date(time).getHours(),
      ':',
      new Date(time).getMinutes(),
    ]
  }

  if (!orders) return ''
  console.log('orders:', orders)

  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories orders={orders} />
      <div className='features'>
        <div className='profile-user flex'>
          <div className='user-container'>
            <div className='profile-pic'>U</div>
            <div className='user-name show'>user</div>

            <div className='user-details'>
              <div className='from-since flex column'>
                <img className='star-fill' src={StarFill} alt='star-fill' />

                <div className=''>
                  <div className='flex '>
                    <img className='location' src={Location} alt='location' />
                    <p className='from space-between'>From</p>

                    <div className='flex'>
                      <p className='country'>Israel</p>
                    </div>
                  </div>
                  <div className=''>
                    <img className='user' src={User} alt='user' />
                    <div className='member flex column'></div>

                    <p className='member-since'>Member since</p>

                    <p className='year'>2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className='total-orders'>
              {orders.length === 1
                ? orders.length + ' order'
                : orders.length + ' orders'}
            </div>
            <div className='table-orders'>
              {orders.map((order) => (
                <table key={order._id}>
                  <tr>
                    <th> Date </th>
                    <th> Buyer </th>
                    <th> Gig</th>
                    <th> Seller name </th>
                    <th> Price</th>
                    <th> Status </th>
                    <th> Actions </th>
                  </tr>
                  <td>{format(order.createdAt)} </td>
                  <td>{order.buyer.fullname} </td>
                  <td>{order.gig._id} </td>
                  <td>{order.seller.fullname} </td>
                  <td>${order.gig.price} </td>
                  <td className='status'>{order.status} </td>
                  <td>
                    <button
                      className='delete-btn'
                      onClick={() => onRemoveOrder(order._id)}
                    >
                      Delete
                    </button>
                    {/* <button>Update</button> */}
                  </td>
                </table>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
