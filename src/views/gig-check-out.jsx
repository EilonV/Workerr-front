import React from 'react'
import { useState, useEffect, useRef } from 'react'
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
// import App from '../cmps/alert-message'

export const GigCheckOut = () => {
  const params = useParams()
  const order = useSelector((state) => state.orderModule.orders)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  var ordersArray = []
  const user = sessionStorage.loggedinUser
    ? JSON.parse(sessionStorage.loggedinUser)
    : ''

  const [isModalOpen, setIsModalOpen] = useState(false)

  const buttonRef = useRef(null)

  const onAddOrder = async () => {
    buttonRef.current.disabled = true
    const order = {
      buyer: user,
      seller: {
        fullname: gig.owner.fullname,
        _id: gig.owner._id,
        username: gig.owner.username,
        imgUrl: gig.owner.imgUrl,
      },
      gig: {
        _id: gig._id,
        name: gig.name,
        price: gig.price,
        title: gig.title,
      },
      status: 'pending',
    }

    dispatch(
      addOrder(order, () => {
        ordersArray.push(order)
        setIsModalOpen(true)
        // console.log('checkout orders', order)
        // navigate(`/gig/details/${gig._id}/checkout/payment`)
      })
    )
  }

  useEffect(() => {
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  // let newPrice = document.querySelector('.new-price').value
  // console.log(newPrice);
  // const setNewPrice = (ev) => {
  //   newPrice = ev.target.value
  //   console.log(newPrice);
  // }

  const getRate = () => {
    let rate = 0
    gig.reviews.map((review) => (rate += review.rate))
    return (rate / gig.reviews.length).toFixed(1)
  }

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
                <img className='gig-owner-image' src={gig.imgUrl[0]} alt='' />
              </Link>
              <div className='text-title flex column'>
                <Link to={`/gig/details/${gig._id}`}>
                  <h3>{gig.title}</h3>
                </Link>
                <div className='gig-rating flex row align-center'>
                  <img className='star-fill' src={StarFill} alt='star-fill' />

                  <h4>{getRate()}</h4>
                  <p className='reviews'>({gig.reviews.length} reviews)</p>
                </div>
                <div className='gig-more'></div>
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
              ref={buttonRef}
              className='btn-purchase'
              onClick={() => onAddOrder(gig._id)}
              gig={gig}
            >
              Continue to checkout
            </button>

            {isModalOpen && (
              <div className='gig-container'>
                <p>
                  Your order has been received by the user, you can see it
                  <span className='link'>
                    <Link to='/user/orders'>&nbsp;here&nbsp;</Link>
                  </span>
                </p>
                <Link to='/gigs'>
                  <button className='back-btn'>Go to Gigs</button>
                </Link>
              </div>
            )}

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
