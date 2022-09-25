import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { gigService } from '../services/gig.service'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../assets/imgs/icons/arrow-right.svg'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Done from '../assets/imgs/icons/done.svg'
import PayPal from '../assets/imgs/icons/paypal/paypal.svg'
import Payment from '../assets/imgs/icons/paypal/payment.svg'
import Mastercard from '../assets/imgs/icons/paypal/Mastercard.svg'
import UBS from '../assets/imgs/icons/paypal/UBS.svg'
import Visa from '../assets/imgs/icons/paypal/Visa.svg'
import { addOrder } from '../store/actions/order.action'

export const GigCheckOut = () => {
  const params = useParams()
  const order = useSelector((state) => state.orderModule.orders)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  var ordersArray = []

  const onAddOrder = async () => {
    const order = {
      buyer: '',
      seller: {
        fullname: gig.owner.fullname,
        _id: gig.owner._id,
      },
      gig: {
        _id: gig._id,
        name: gig.name,
        price: gig.price,
      },
    }

    dispatch(
      addOrder(order, () => {
        ordersArray.push(order)
        console.log('checkout orders', order)
        navigate(`/gig/details/${gig._id}/checkout/payment`)
      })
    )
  }

  useEffect(() => {
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  if (!gig) return ''

  return (
    <section className='gig-check-out main-layout'>
      <div className='app-header-checkout'>
        <NavLink to='/gigs'>
          <h1 className='logo'>
            Workerr<span>.</span>
          </h1>
        </NavLink>

        <nav className='header-order main-layout flex'>
          <ul className='order-details flex'>
            <li className='list flex'>
              <p className='number num'>1</p>
              <p className='text text1'>Order Details</p>
              <img className='svg' src={ArrowRight} alt='arrow-right' />
            </li>
            <li className='list flex'>
              <p className='number'>2</p>
              <p className='text text2 flex align-center'>Confirm & Pay</p>
              <img className='svg' src={ArrowRight} alt='arrow-right' />
            </li>
            <li className='list flex'>
              <p className='number'>3</p>
              <p className='text text3'>Submit Requirements</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className='summary-container flex '>
        <div>
          <section className='summary-loyalty'>
            <div className='text-body flex row'>
              <Link to={`/gig/details/${gig._id}`}>
                <img className='gig-owner-image' src={gig.imgUrl} alt='' />
              </Link>
              <div className='text-title flex column'>
                <Link to={`/gig/details/${gig._id}`}>
                  <h3>{gig.title}</h3>
                </Link>
                <div className='gig-rating flex row align-center'>
                  <img className='star-fill' src={StarFill} alt='star-fill' />

                  <h4>{gig.owner.rate}</h4>
                  <p className='reviews'>({gig.reviews.length} reviews)</p>
                </div>
                <p className='reviews included'>View what's included</p>
                <div className='gig-more'></div>
              </div>

              <div>
                <div className='pricing'>
                  Qty
                  <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                    <option value='19'>19</option>
                    <option value='20'>20</option>
                  </select>
                  <span> {'$' + gig.price}</span>
                </div>
              </div>
            </div>
          </section>
          <section>
            <section className='package'>
              <div className='text'>
                <h2>Your order </h2>
                <div className='features '>
                  <ul>
                    {gig.tags.map((a) => (
                      <li className='svg' key={a}>
                        <img className='done' src={Done} alt='done' />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div>
          <div className='checkout-container'>
            <header>
              <h3>Price summary</h3>
              <div className='subtotal summary-item flex space-between'>
                <p>Subtotal</p>
                <p>{'$' + gig.price}</p>
              </div>
              <div className='service summary-item flex space-between'>
                <p>Service Fee</p>
                <p>{'$' + (gig.price * 0.17).toFixed(2)}</p>
              </div>
            </header>
            <article>
              <div className='total summary-item flex space-between'>
                <p>Total</p>
                <p>{'$' + (gig.price * 1.17).toFixed(2)}</p>
              </div>
              <div className='delivery summary-item flex space-between'>
                <p>Delivery Time</p>
                <p>5 Days</p>
              </div>
            </article>
            {/* <Link to={`/gig/details/${gig._id}/payment`}> */}
            <button
              className='btn-purchase'
              onClick={() => onAddOrder(gig._id)}
            >
              Continue to checkout
            </button>
            {/* </Link> */}
            <p className='not-charge'>You won't be charged yet</p>
          </div>
          <div className='credit-card'>
            <div className='cards-container'>
              <img className='paypal cards' src={PayPal} alt='paypal' />
              <img className='bank cards' src={Payment} alt='bank' />
              <img
                className='mastercard cards'
                src={Mastercard}
                alt='mastercard'
              />
              <img className='ubs cards' src={UBS} alt='ubs' />
              <img className='visa cards' src={Visa} alt='visa' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
