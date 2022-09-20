import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadGigs, removeGig } from '../store/actions/gig.action'
import { gigService } from '../services/gig.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { ReviewSeller } from '../cmps/reviews-seller'
import { GigCheckOut } from './gig-check-out'

export const GigDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  const onRemoveGig = (gigId) => {
    dispatch(
      removeGig(gigId, () => {
        navigate('/gigs')
      })
    )
  }

  if (gig)
    return (
      <section className='gig-details main-layout'>
        <AppHeaderExplore />
        <div className='details-container flex row'>
          <div className='main-details gap'>
            <section>
              <h1>{gig.title}</h1>

              <div className='seller-avatar-top flex row align-center gap'>
                <img
                  className='gig-owner-image-top border-radius'
                  src={gig.owner.imgUrl}
                  alt=''
                />
                <Link className='seller-name-top' to={'/#'}>
                  {gig.owner.fullname}|
                </Link>
                <h4>{gig.owner.level}|</h4>
                <h4>{gig.owner.rate}</h4>
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
              </div>

              <img
                className='gig-img'
                src={gig.imgUrl}
                alt='Some Logo Design'
              />
              <h2>About Gig</h2>
              <p>{gig.longerDescription} </p>
            </section>

            <h2>About The Seller</h2>

            <section className='seller-avatar-about flex row align-center gap'>
              <img
                className='gig-owner-image-about border-radius'
                src={gig.owner.imgUrl}
                alt=''
              />
              <div className='flex column'>
                <Link to={'/#'}> {gig.owner.fullname}</Link>
                <h4 className='seller-level'>{gig.owner.level}</h4>
                <div className='seller-rate flex row'>
                  <h4>{gig.owner.rate}</h4>
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
                </div>
              </div>
            </section>

            <section className='seller-desc flex column gap'>
              <div className='formal-desc flex row'>
                <div className='flex column gap'>
                  <h4 className='flex column'>
                    <span> From</span> {gig.owner.ownerCountry}
                  </h4>
                  <h4 className='flex column'>
                    <span> Member Since</span> {gig.owner.memberSince}{' '}
                  </h4>
                </div>

                <div className='flex column gap'>
                  <h4 className='flex column'>
                    <span> Avg. response time</span> {gig.owner.avgResponseTime}
                  </h4>
                  <h4 className='flex column'>
                    <span> Last delivery</span> {gig.owner.lastDelivery}
                  </h4>
                </div>
              </div>

              <div className='seller-letter'>
                <p>{gig.owner.ownerLetter}</p>
              </div>
            </section>

            {/* { gig.reviews.map(<ReviewSeller review={review} key={review._id} />)} */}

            <Link to={`/gig/edit/${gig._id}`}>Edit</Link>
            <button onClick={() => onRemoveGig(gig._id)}>Delete</button>
          </div>

          <aside className='aside flex column gap'>
            <div className='package-content flex column gap'>
              <div className='package-title flex row'>
                <h1>Package details</h1>
                <span>${gig.price}</span>
              </div>

              <div className='delivery-revision flex row justify-center'>
                <span>{gig.daysToMake} Days To Make </span>
                <span>Revisions</span>
              </div>

              <ul className='gig-inclusive flex column'>
                {gig.tags.map((a) => (
                  <li>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill='#1dbf73'
                        d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'
                      />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
              <Link
                to={`/gig/details/${gig._id}/checkout/`}
                className='flex row gap justify-center space-between'
              >
                Continue <span>(${gig.price})</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    )
}
