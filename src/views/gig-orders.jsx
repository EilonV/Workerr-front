import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { UserNav } from '../cmps/user-nav'
import { loadOrders, removeOrder } from '../store/actions/order.action'
import { orderService } from '../services/order.service'

// import { useNavigate, useParams } from 'react-router-dom'

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

  const onAcceptOrder = (orderId) => {
    console.log(orderId)
    console.log(orderService.getById(orderId))
    console.log(orders)
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
  console.log(orders)
  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories orders={orders} />
      <div className='features main-layout'>
        <div className='profile-user '>
          <div className='page-container flex '>
            <UserNav />
            <div className='orders-container'>
              <section className='total-orders'>
                <div className='title flex space-between'>
                  <p>Total orders &nbsp; </p>
                  <p className='num-orders'>
                    {orders.length === 1
                      ? orders.length + ' order'
                      : orders.length + ' orders'}
                  </p>
                  {/* <p>This month's orders &nbsp; </p> */}
                </div>
                {/* <div className='title flex space-between'>
                <p className='num-orders'>
                  Revenues: <span className='price'>$ 0.00</span> &nbsp;
                </p>
                <p className='num-orders'>
                  Revenues: <span className='price'>$ 0.00</span> &nbsp;
                </p>
                <p className='num-orders'>
                  Revenues: <span className='price'>$ 0.00</span> &nbsp;
                </p>
              </div>
              <div className='title flex space-between'>
                <p>Quantity:0 &nbsp;</p>
                <p>Quantity:0 &nbsp;</p>
                <p>Quantity:0 &nbsp;</p>
              </div> */}

                <div className='table-orders'>
                  <table>
                    <tr>
                      <th> Date </th>
                      <th> Client </th>
                      <th> Gig</th>
                      <th> Seller name </th>
                      <th> Price</th>
                      <th> Status </th>
                      <th> Actions </th>
                    </tr>
                    {orders.map((order) => (
                      <tr>
                        <td>{format(order.createdAt)} </td>
                        <td>{order.buyer.username} <br />({order.buyer.fullname}) </td>
                        <td>{order.gig._id} </td>
                        <td>{order.seller.fullname} </td>
                        <td>${order.gig.price} </td>
                        <td className='status'>{order.status} </td>
                        <td className='flex'>
                          {/* <button
                            className='delete-btn'
                            onClick={() => onRemoveOrder(order._id)}
                          >
                            Delete
                          </button> */}
                          <button onClick={() => onAcceptOrder(order._id)}>Accept</button>
                          <button>Decline</button>
                          {/* <button>Update</button> */}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
