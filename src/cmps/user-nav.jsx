import { Link } from 'react-router-dom'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Location from '../assets/imgs/icons/location.svg'
import User from '../assets/imgs/icons/user.svg'
import Star from '../assets/imgs/icons/star-fill.svg'
import HalfStar from '../assets/imgs/icons/star-half.svg'

import { useEffect, useState } from 'react'
import { userService } from '../services/user.service'

export const UserNav = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const user = await userService.getLoggedinUser()
    setUser(user)
    // console.log('user:', user)
  }

  // const onRemoveUser = (userId) => {
  //   dispatch(removeUser(userId, () => {
  //     navigate('/gigs')
  //   }))
  // }

  // const onUpdateUser = (userId) => {
  //   dispatch(updateUser(userId, () => {
  //     navigate('/gigs')
  //   }))
  // }
  if (!user) return ''
  // console.log(user)
  return (
    <div className='profile-user'>
      <div className='user-container'>
        <div className='status-user'>
          <div className='on-off'>
            {/* <span className='dot'>.</span> */}
            <i className='status'>Online</i>
          </div>

          <img className='profile-pic' src={user.imgUrl} alt='profile-pic' />
          <p className='user-name show'>{user.username}</p>
          <img className='gig-review-star' src={Star} alt='star' />
          <img className='gig-review-star' src={Star} alt='star' />
          <img className='gig-review-star' src={Star} alt='star' />
          <img className='gig-review-star' src={Star} alt='star' />

          <section className='user-details'>
            <div className='first flex space-between'>
              <div className='from-since flex'>
                <img className='location' src={Location} alt='location' />

                <p className='from'>From</p>
              </div>

              <p className='country'>{user.country}</p>
            </div>

            <div className='second flex space-between'>
              <div className='member flex'>
                <img className='user' src={User} alt='user' />
                <p className='from'>Member since</p>
              </div>
              <p className='first year'>{user.memberSince}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
