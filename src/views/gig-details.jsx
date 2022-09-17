import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { gigService } from '../services/gig.service'
import { userService } from '../services/user.service'

export const GigDetails = (onRemoveGig) => {
  const params = useParams()
  const navigate = useNavigate()

  const [gig, setGig] = useState(null)
  useEffect(() => {
    const id = params.id
    gigService.getById(id).then((gig) => setGig(gig))
  }, [])

  console.log(gig)

  if (gig)
    return (
      <div className='toy-details'>
        <section>
          <h1>{gig.title}</h1>

<<<<<<< HEAD
    if (gig) return (
        <div className='gig-details'>
=======
          <div className='seller-avatar flex row align-center gap'>
            <Link to={'/#'}>{gig.owner.fullname}</Link>
            <h4>{gig.owner.level}</h4>
            <h4>{gig.owner.rate}</h4>
          </div>
>>>>>>> 0bb7653db0a0a1026e766edf69bb48dbf3aeab25

          <img src={gig.imgUrl} alt='Some Logo Design' />
          <h2>About Gig</h2>
          <p>{gig.longerDescription} </p>
        </section>

<<<<<<< HEAD
                <div className='seller-avatar flex row align-center gap'>
                <img className='seller-img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
                    <Link to={'/#'} >{gig.owner.fullname}</Link>
                    <h4>{gig.owner.level}</h4>
                    <h4>{gig.owner.rate}</h4>
                </div>

                <img className='gig-picture' src={gig.imgUrl} alt='Some Logo Design' />

                <h2>About Gig</h2>
                <p>{gig.longerDescription} </p>
            </section>

            <section className='flex column gap'>
                <h2>About The Seller</h2>
                <div className='seller-avatar flex row align-center gap'><img className='seller-img' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
                 <div className='flex column'>  <Link to={'/#'} > {gig.owner.fullname}</Link>
                    <p className='seller-level'>{gig.owner.level}</p>
                    <p>{gig.owner.rate}</p>
                    </div> 
                </div>

            </section>

            <section className='seller-desc flex column'>
                <div className='formal-desc flex row gap'>
                    <div className='flex column gap'>
                        <h4><p>From </p>{gig.owner.ownerCountry}</h4>
                        <h4><p>Member Since</p>{gig.owner.memberSince}</h4>
                    </div>
                    <div className='flex column gap'>
                        <h4><p>Avg. response</p>time {gig.owner.avgResponseTime}</h4>
                        <h4><p>Last delivery</p>{gig.owner.lastDelivery}</h4>
                    </div>
                </div>

                <div className='seller-letter'>
                    <p>{gig.owner.ownerLetter}</p>
                </div>
            </section>



        </div>
=======
        <h2>About The Seller</h2>
        <section className='seller-avatar flex row align-center gap'>
          <img
            className='img-seller border-radius'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
          />
          <Link to={'/#'}> {gig.owner.fullname}</Link>
          <p className='seller-level'>{gig.owner.level}</p>
        </section>

        <section className='seller-desc flex column'>
          <div className='formal-desc flex row'>
            <h4> From {gig.owner.ownerCountry}</h4>
            <h4> Member Since {gig.owner.memberSince}</h4>
            <h4>Avg. response time {gig.owner.avgResponseTime}</h4>
            <h4>Last delivery {gig.owner.lastDelivery}</h4>
          </div>

          <div className='seller-letter'>
            <p>{gig.owner.ownerLetter}</p>
          </div>

          <Link to={`/gig/edit/${gig._id}`}>Edit</Link>
        </section>
        <button onClick={() => onRemoveGig(gig._id)}>Delete</button>
      </div>
>>>>>>> 0bb7653db0a0a1026e766edf69bb48dbf3aeab25
    )
}
