import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { ProfileHeader } from '../cmps/profile-header'
import { UserNav } from '../cmps/user-nav'
import { loadOrders, removeOrder, updateOrder } from '../store/actions/order.action'
import { orderService } from '../services/order.service'
import login from '../assets/imgs/icons/must-login.svg'
import noGigs from '../assets/imgs/icons/no-gigs-seller.svg'

// import { useNavigate, useParams } from 'react-router-dom'

export const SellerOrders = () => {
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
      default:
        return 'status'
    }
  }
  const user = sessionStorage.loggedinUser ? JSON.parse(sessionStorage.loggedinUser) : ''


  if (!orders) return ''

  const isSeller = orders.some(order => order.seller.username === user.username)
  const sellerOrders = orders.filter(order => order.seller.username === user.username)
  const currOrders = sellerOrders.filter(order => order.status === 'in progress' || order.status === 'completed')
  const completedOrders = sellerOrders.filter(order => order.status === 'completed')

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
                {/* <UserNav /> */}
                <div className='orders-container'>
                  {isSeller &&
                    <div className='sales-info flex'>
                      <div className='total-sales'>
                        <h1>Total sales revenue</h1>
                        <p>${currOrders.reduce((sum, order) => { return sum += order.gig.price }, 0)}</p>
                      </div>
                      <div className='total-sales'>
                        <h1>Total customers served</h1>
                        <p>{sellerOrders.length}</p>
                      </div>
                      <div className='total-sales'>
                        <h1>Current ongoing projects</h1>
                        <p>{currOrders.length}</p>
                      </div>
                      <div className='total-sales'>
                        <h1>Completed projects</h1>
                        <p>{completedOrders.length}</p>
                      </div>
                      {/* <div className='total-sales full full-filler'>
                      </div> */}
                    </div>

                  }
                  {isSeller ? <section className='total-orders'>

                    <div>

                      <div className='table-orders'>
                        <h2>Client orders</h2>

                        <table>
                          <tr>
                            <th style={{ width: "200px" }}> Client </th>
                            <th> Gig title</th>
                            <th style={{ textAlign: "center" }}> Date </th>
                            <th style={{ textAlign: "center" }}> Price</th>
                            <th style={{ textAlign: "center" }}> Status </th>
                            <th style={{ textAlign: "center", width: "150px" }}> Actions </th>
                          </tr>
                          {sellerOrders.map((order) => (
                            <tr>
                              <td>
                                <div className='flex align-center'>
                                  <img src={order.buyer.imgUrl} alt="" />
                                  {order.buyer.username}
                                </div>
                              </td>
                              <td className='order-title'>{order.gig.title} </td>
                              <td style={{ textAlign: "center" }}>{format(order.createdAt)} </td>
                              <td style={{ textAlign: "center" }}>${order.gig.price} </td>
                              <td className={changeStatusColor(order.status)}>{order.status}</td>
                              <td style={{ textAlign: "right", width: "130px" }} className=''>
                                {order.status === 'pending' &&
                                  <div className='seller-btns flex  justify-center'>
                                    <button onClick={() => onChangeStatus(order, 'in progress')}>accept</button>
                                    <button onClick={() => onChangeStatus(order, 'declined')}>decline</button>
                                  </div>
                                }
                                {order.status === 'in progress' &&
                                  <div className='seller-btns flex justify-center '>
                                    <button className='complete' onClick={() => onChangeStatus(order, 'completed')}>complete</button>
                                  </div>
                                }

                              </td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </div>

                  </section>
                    :
                    <div className='no-gigs flex column'>
                      <h2 className='flex justify-center align-center text-center'>Looks like you dont have any gigs for sale</h2>
                      <img src={noGigs} alt="" />
                    </div>
                  }

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
