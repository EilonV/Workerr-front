import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadGigs, removeGig } from '../store/actions/gig.action'
import { gigService } from '../services/gig.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { ReviewList } from '../cmps/review-list'
import { TableRating } from '../cmps/table-rating'
import { GigCheckOut } from './gig-check-out'


export const GigDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    const id = params.id
    loadGig(id)
  }, [])

  const loadGig = async gigId => {
    const gig = await gigService.getById(gigId)
    setGig(gig)

  }

  const onRemoveGig = (gigId) => {
    dispatch(removeGig(gigId, () => {
      navigate('/gigs')
    }))

  }
  console.log(gig);
  // console.log(gig.user[0].reviews);

  if (gig)
    return (
      <section className='gig-details'>
        <AppHeaderExplore />
        <header className='scroll-to flex row space-between'>{gig.tags.map(tag => <nav>{tag}</nav>)}</header>
        <div className='details-container flex row'>
          <div className='main-details gap'>
            <section>
              <h1>{gig.title}</h1>



              <div className='seller-avatar-top flex row align-center gap'>
                <img className='gig-owner-image-top border-radius' src={gig.owner.imgUrl} alt='' />
                <Link className='seller-name-top' to={'/#'}>
                  {gig.owner.fullname}|
                </Link>
                <h4>{gig.owner.level}|</h4>
                <h4>{gig.owner.rate}</h4>
                <svg
                  className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16'><path fill='#ffbe5b'
                    d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'/></svg>
              </div>

              <img className='gig-img' src={gig.imgUrl} alt='Some Logo Design' />
              <h2>About Gig</h2>
              <p>{gig.longerDescription}</p>
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
                  <svg className='gig-review-star' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 1792' width='16' height='16' ><path fill='#ffbe5b' d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' /></svg>
                </div>
              </div>
            </section>

            <section className='seller-desc flex column gap'>
              <div className='formal-desc flex row'>
                <div className='flex column gap'>
                  <h4 className='flex column'><span className='formal-title'> From</span> {gig.owner.ownerCountry}</h4>
                  <h4 className='flex column'><span className='formal-title'> Member Since</span> {gig.owner.memberSince} </h4>
                </div>

                <div className='flex column gap'>
                  <h4 className='flex column'><span className='formal-title'> Avg. response time</span> {gig.owner.avgResponseTime}</h4>
                  <h4 className='flex column'><span className='formal-title'> Last delivery</span> {gig.owner.lastDelivery}</h4>
                </div>
              </div>

              <div className='seller-letter'>
                <p>{gig.owner.ownerLetter}</p>
              </div>
            </section>


            <ReviewList reviews={gig.reviews} />

            {/* <div> {gig.user.reviews.}</div> */}

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

              <div className='delivery-revision flex row gap justify-center'>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16' height='16'><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" /></svg>
                  <span>{gig.daysToMake} Days To Make</span>
                </div>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16' height='16'><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg>
                  <span>Revisions</span>
                </div>
              </div>

              <ul className='gig-inclusive flex column'>
                {gig.tags.map((a) => (
                  <li><svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fill='#1dbf73' d='M13.6202 2.6083L5.4001 10.8284L2.37973 7.80805C2.23329 7.66161 1.99585 7.66161 1.84939 7.80805L0.96551 8.69193C0.819073 8.83836 0.819073 9.0758 0.96551 9.22227L5.13492 13.3917C5.28135 13.5381 5.51879 13.5381 5.66526 13.3917L15.0344 4.02252C15.1809 3.87608 15.1809 3.63865 15.0344 3.49218L14.1505 2.6083C14.0041 2.46186 13.7667 2.46186 13.6202 2.6083Z'/></svg>
                    {a}</li>))}</ul>
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
