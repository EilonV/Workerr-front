import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { gigService } from '../services/gig.service'

export const GigCheckOut = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  if (!gig) return ''
  return (
    <section className='gig-check-out'>
      <div className='app-header-checkout'>
        <h1 className='logo'>
          Workerr<span>.</span>
        </h1>

        <nav className='header-order flex'>
          <ul className='order-details flex'>
            <li className='list flex'>
              <p className='number num'>1</p>
              <p className='text text1'>Order Details</p>
              <svg
                width='8'
                height='16'
                viewBox='0 0 8 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z'></path>
              </svg>
              <path d='M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z'></path>
            </li>
            <li className='list flex'>
              <p className='number'>2</p>
              <p className='text text2 flex align-center'>Confirm & Pay</p>
              <svg
                width='8'
                height='16'
                viewBox='0 0 8 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z'></path>
              </svg>
              <path d='M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z'></path>
            </li>
            <li className='list flex'>
              <p className='number'>3</p>
              <p className='text text3'>Submit Requirements</p>
            </li>
          </ul>
        </nav>
      </div>

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
              <svg
                className='gig-review-star'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1792 1792'
                width='16'
                height='16'
              >
                <path
                  fill='#ffbe5b'
                  d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'
                />
              </svg>
              <h4>{gig.owner.rate}</h4>
              <p className='reviews'>(150 reviews)</p>
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
              <span>$90</span>
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
                <li>
                  <i className='line-list'></i>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill=' #1dbf73'
                      d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                    />
                  </svg>

                  <i className='line-list'></i>
                  <span className='line-list'>3 Initial Concepts Included</span>
                </li>
                <li>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill=' #1dbf73'
                      d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                    />
                  </svg>
                  <i className='line-list'></i>
                  <span className='line-list'>Source File</span>
                </li>
                <li>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill=' #1dbf73'
                      d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                    />
                  </svg>
                  <i className='line-list'></i>
                  <span className='line-list'>Logo Transparency</span>
                </li>
                <li>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill=' #1dbf73'
                      d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                    />
                  </svg>
                  <i className='line-list'></i>
                  <span className='line-list'>High Resolution</span>
                </li>
                <li>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill=' #1dbf73'
                      d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                    />
                  </svg>
                  <i className='line-list'></i>
                  <span className='line-list'>Vector File</span>
                </li>
              </ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
              <ul></ul>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
