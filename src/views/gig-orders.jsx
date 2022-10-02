import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { ProfileHeader } from '../cmps/profile-header'
import { loadOrders, removeOrder, updateOrder } from '../store/actions/order.action'
import login from '../assets/imgs/icons/must-login.svg'

// import { useNavigate, useParams } from 'react-router-dom'

export const Orders = () => {
  // const params = useParams()
  let orders = useSelector((state) => state.orderModule.orders)
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

  const onChangeStatus = (order, newStatus) => {
    const updatedOrder = { ...order, status: newStatus }
    dispatch(updateOrder(updatedOrder))
    dispatch(loadOrders())
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

      // new Date(time).getHours(),
      // ':',
      // new Date(time).getMinutes(),
    ]
  }
  const changeStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'status pending'

      case 'in progress':
        return 'status in-progress'

      case 'declined':
        return 'status declined'
      case 'completed':
        return 'status completed'
    }
  }
  const user = sessionStorage.loggedinUser ? JSON.parse(sessionStorage.loggedinUser) : ''


  if (!orders) return ''

  const isBuyer = orders.some(order => order.buyer._id === user._id)
  const isSeller = orders.some(order => order.seller.username === user.username)
  const sellerOrders = orders.filter(order => order.seller.username === user.username)
  const buyerOrders = orders.filter(order => order.buyer._id === user._id)
  console.log(orders)
  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories orders={orders} />
      {user ?
        <div className='features main-layout'>
          <ProfileHeader />
          <div className='orders-wrapper'>
            <div className='profile-user '>
              <div className='page-container flex '>
                <div className='orders-container'>

                  <section className='total-orders'>

                    {isBuyer &&
                      <div>

                        <div className='table-orders2'>
                          <h2>Total orders</h2>

                          <table>
                            <tr>
                              <th style={{ width: "200px" }}> Seller </th>
                              <th style={{ width: "650px" }}> Gig title</th>
                              <th style={{ textAlign: "center" }}> Date </th>
                              <th style={{ textAlign: "center" }}> Price</th>
                              <th style={{ textAlign: "center", paddingRight: "10px" }}> Status </th>
                              {/* <th> Actions </th> */}
                            </tr>
                            {buyerOrders.map((order) => (
                              <tr>
                                <td>
                                  <div className='flex align-center'>
                                    {order.seller.imgUrl ? (<img src={order.seller.imgUrl} alt="" />) :
                                      (order.seller.username ? <div className='no-pic-bg'><p >{order.seller.username.charAt(0).toUpperCase()}</p></div> : 'NO USERNAME')}
                                    {order.seller.username}
                                  </div>
                                </td>
                                <td className='order-title'>{order.gig.title} </td>
                                <td style={{ textAlign: "center" }}>{format(order.createdAt)} </td>
                                <td style={{ maxWidth: "60px", textAlign: "center" }}>${order.gig.price} </td>
                                <td style={{ textAlign: "center" }} className={changeStatusColor(order.status)} >{order.status} </td>
                                {/* <td className='flex'>
                              {order.status === 'pending' &&
                                <div className='seller-btns flex'>
                                  <button onClick={() => onChangeStatus(order, 'in progress')}>Accept</button>
                                  <button onClick={() => onChangeStatus(order, 'declined')}>Decline</button>
                                </div>
                              }

                            </td> */}
                              </tr>
                            ))}
                          </table>
                        </div>
                      </div>

                    }
                  </section>
                  {(!isBuyer && !isSeller)}

                </div>
              </div>
            </div>
          </div>

        </div > :
        <div className='not-logged main-layout text-center '>
          <h2>Must be logged in to view orders</h2>
          <img src={login} alt="" style={{ width: "60%" }} />
        </div>
      }
    </section >
  )
}
