import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeGig } from '../store/actions/gig.action'
import { gigService } from '../services/gig.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { ReviewList } from '../cmps/review-list'
import { HeaderCategories } from '../cmps/header-categories'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Done from '../assets/imgs/icons/done.svg'
import Clock from '../assets/imgs/icons/clock.svg'
import Sync from '../assets/imgs/icons/sync.svg'

export const GigDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    const id = params.id
    loadGig(id)
  }, [])

  const loadGig = async (gigId) => {
    const gig = await gigService.getById(gigId)
    setGig(gig)
  }

  const onRemoveGig = (gigId) => {
    dispatch(
      removeGig(gigId, () => {
        navigate('/gigs')
      })
    )
  }

  console.log(gig)

  if (gig)
    return (
      <section className='gig-details main-layout'>
        <AppHeaderExplore />
        <HeaderCategories gig={gig} />
        <div className='details-container flex row'>
          <div className='main-details gap'>
            <section>
              <div className='text-title'>
                <h1>{gig.title}</h1>
              </div>

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
                <h4>{gig.owner.rate}</h4>|
                <img
                  className='gig-review-star'
                  src={StarFill}
                  alt='star-fill'
                />
                5 ({gig.reviews.length})
              </div>

              <img
                className='gig-img'
                src={gig.imgUrl}
                alt='Some Logo Design'
              />
              <h2 className='desc'>About This Gig</h2>

              <p className='desc-list'>{gig.longerDescription}</p>
            </section>
            <div className='genre'>
              <p className='genre-title'>Genre </p>
              <p className='genre-list'>Hip-Hop </p>
            </div>

            <div className='seller'>
              <h2>About The Seller</h2>

              <section className='seller-avatar-about flex row align-center gap'>
                <img
                  className='gig-owner-image-about border-radius'
                  src={gig.owner.imgUrl}
                  alt=''
                />
                <div className='flex column'>
                  <Link className='name' to={'/#'}>
                    {gig.owner.fullname}
                  </Link>
                  <div className='seller-rate flex'>
                    <p className='proposal'>Let me be your producer</p>
                  </div>
                  <div className='flex'>
                    <img
                      className='gig-review-star'
                      src={StarFill}
                      alt='star-fill'
                    />
                    <p className='rate'>
                      {gig.owner.rate}({gig.reviews.length})
                    </p>
                  </div>
                  <button className='btn-contact'>Contact Me</button>
                </div>
              </section>
            </div>

            <section className='seller-desc flex column gap'>
              <div className='formal-desc flex row'>
                <div className='flex column gap'>
                  <h4 className='flex column'>
                    <span className='formal-title'> From</span>
                    {gig.owner.ownerCountry}
                  </h4>
                  <h4 className='flex column'>
                    <span className='formal-title'> Member Since</span>
                    {gig.owner.memberSince}
                  </h4>
                </div>

                <div className='flex column gap'>
                  <h4 className='flex column'>
                    <span className='formal-title'> Avg. response time</span>
                    {gig.owner.avgResponseTime}
                  </h4>
                  <h4 className='flex column'>
                    <span className='formal-title'> Last delivery</span>
                    {gig.owner.lastDelivery}
                  </h4>
                </div>
              </div>

              <div className='seller-letter'>
                <p>{gig.owner.ownerLetter}</p>
              </div>
            </section>

            <ReviewList reviews={gig.reviews} />
            <section className=''>
              <Link className='btn' to={`/gig/edit/${gig._id}`}>
                Edit
              </Link>
              <button className='btn' onClick={() => onRemoveGig(gig._id)}>
                Delete
              </button>
            </section>
          </div>

          <aside className='aside flex column gap'>
            <div className='package-content flex column gap'>
              <div>
                <div className='levels flex space-between'>
                  <lab className='basic'>Basic</lab>
                  <p className='standard'>Standard</p>
                  <p className='premium'>Premium</p>
                </div>
              </div>
              <section>
                <div className='details'>
                  <div className='package-title flex space-between'>
                    <h1>Package details</h1>
                    <h1>${gig.price}</h1>
                  </div>
                  <p>Complete arrangement of your original or cover song.</p>
                  <div>
                    <div className='delivery-revision flex'>
                      <div className='flex'>
                        <img className='svg clock' src={Clock} alt='clock' />

                        <span>{gig.daysToMake} Days To Make</span>
                      </div>
                      <div className='flex'>
                        <img className='svg sync' src={Sync} alt='sync' />
                        <span>Revisions</span>
                      </div>
                    </div>

                    <ul className='gig-inclusive grid'>
                      {gig.tags.map((a) => (
                        <li key={gig._id} className='list flex'>
                          <img className='done' src={Done} alt='done' />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/gig/details/${gig._id}/checkout`}
                      className='procced-btn'
                    >
                      Continue <span>(${gig.price})</span>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </section>
    )
}
