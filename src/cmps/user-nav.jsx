import { Link } from 'react-router-dom'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Location from '../assets/imgs/icons/location.svg'
import User from '../assets/imgs/icons/user.svg'
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

  console.log(user)
  return (
    <div className='profile-user'>
      <div className='user-container'>
        <div className='status-user'>
          <div className='on-off'>
            {/* <span className='dot'>.</span> */}
            <i className='status'>Online</i>
          </div>

          <p className='profile-pic'>U</p>
          <p className='user-name show'>{user.username}</p>
          <img className='star-fill' src={StarFill} alt='star-fill' />

          <Link to='/user/:'>
            <p
              className='profile-btn'
              text='seller_card.view_as_buyer'
              href='/ilyaig8?public_mode=true'
            >
              Preview Fiverr Profile
            </p>
          </Link>

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
              <p className='first year'>Sep 2021</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
