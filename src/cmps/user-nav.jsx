import { Link } from 'react-router-dom'
import StarFill from '../assets/imgs/icons/5-stars.svg'
import Location from '../assets/imgs/icons/location.svg'
import User from '../assets/imgs/icons/user.svg'

export function UserNav() {
  const user = JSON.parse(sessionStorage.loggedinUser)
  // {sessionStorage.loggedinUser &&
  return (
    <div className='profile-user'>
      <div className='user-container'>
        <div className='status-user'>
          <div className='on-off'>
            {/* <span className='dot'>.</span> */}
            <i className='status'>Online</i>
          </div>

          <p className='profile-pic'>{user.fullname.charAt(0).toUpperCase()}</p>
          <p className='user-name show'>{user.username}</p>
          <img className='star-fill' src={StarFill} alt='star-fill' />

          {/* {sessionStorage.loggedinUser && (
            <Link to='/user/:'>
              <p
                className='profile-btn'
                text='seller_card.view_as_buyer'
                href='/ilyaig8?public_mode=true'
              >
                Preview Fiverr Profile
              </p>
            </Link>
          )} */}

          <section className='user-details'>
            <div className='first flex space-between'>
              <div className='from-since flex'>
                <img className='location' src={Location} alt='location' />

                <p className='from'>From</p>
              </div>

              <p className='country'>Israel</p>
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
