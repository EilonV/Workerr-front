import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadGigs, removeGig } from '../store/actions/gig.action'
import { gigService } from '../services/gig.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'

export const GigDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gig, setGig] = useState(null)

  useEffect(() => {
    // console.log('render')
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  const onRemoveGig = (gigId) => {
    // console.log('render')
    dispatch(removeGig(gigId))
    navigate('/gigs')
  }

  if (gig)
    return (
      <section className='gig-details'>
        <AppHeaderExplore />
        <div className='details-container'>
          <section>
            <h1>{gig.title}</h1>

            <div className='seller-avatar flex row align-center gap'>
              <img
                className='gig-owner-image border-radius'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
              />
              <Link to={'/#'}>{gig.owner.fullname}</Link>
              <h4>{gig.owner.level}</h4>
              <h4>{gig.owner.rate}</h4>
            </div>

            <img src={gig.imgUrl} alt='Some Logo Design' />
            <h2>About Gig</h2>
            <p>{gig.longerDescription} </p>
          </section>

          <h2>About The Seller</h2>
          <section className='seller-avatar flex row align-center gap'>
            <img
              className='gig-owner-image border-radius'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
            />
            <div className='flex column'>
              <Link to={'/#'}> {gig.owner.fullname}</Link>
              <h4 className='seller-level'>{gig.owner.level}</h4>
              <h4>{gig.owner.rate}</h4>
            </div>
          </section>

          <section className='seller-desc flex column gap'>
            <div className='formal-desc flex row gap'>
              <div className='flex column gap'>
                <h4 className='flex column gap'> <span>  From</span> {gig.owner.ownerCountry}</h4>
                <h4 className='flex column gap'> <span>  Member Since</span> {gig.owner.memberSince}</h4>
              </div>
              <div className='flex column gap'>
                <h4 className='flex column gap'> <span> Avg. response time</span> {gig.owner.avgResponseTime}</h4>
                <h4 className='flex column gap'> <span> Last delivery</span> {gig.owner.lastDelivery}</h4>
              </div>
            </div>

            <div className='seller-letter'>
              <p>{gig.owner.ownerLetter}</p>
            </div>

          </section>
          <Link to={`/gig/edit/${gig._id}`}>Edit</Link>
          <button onClick={() => onRemoveGig(gig._id)}>Delete</button>
        </div>
        <aside className='aside'>
          <div className='package-content'>
            <h1>Package details</h1>
            <h3>{gig.name}</h3>
            <span>{gig.price}$</span>
            <span className='days-to-delivery'>4 Days Delivery</span>
            <Link></Link>
          </div>
        </aside>

      </section>
    )
}
