import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { gigService } from '../services/gig.service'
import { userService } from '../services/user.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { UserNav } from '../cmps/user-nav'

export const UserPage = () => {
  const loggedinUser = sessionStorage.loggedinUser
    ? JSON.parse(sessionStorage.loggedinUser)
    : ''
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const id = params.id
    loadUser(id)
  }, [user])

  const loadUser = async (userId) => {
    const user = await userService.getById(userId)
    setUser(user)
  }

  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories />

      {sessionStorage.loggedinUser ? (
        <section className='gig-profile-container main-layout'>
          <section className='user-page-orders flex'>
            <UserNav />

            <div className='profile-user'>
              <div className='orders-container'>
                <p className='my-orders'>
                  <h1>ACTIVE GIGS</h1>
                </p>

                <div className='new-gig'>
                  <label>
                    <h3 className='active-gigs'>
                      It seems that you don't have any active Gigs
                    </h3>
                  </label>
                  <Link to='/user/:'>
                    <div className='img-create'>
                      <a
                        href='/users/ilyaig8/manage_gigs/new'
                        className='st-current'
                      >
                        <svg
                          className='svg'
                          xmlns='http://www.w3.org/2000/svg'
                          width='300'
                          height='352'
                          viewBox='0 0 300 352'
                        >
                          <title>Create a Gig</title>
                          <path
                            className='hover-block'
                            fill='#b5b6ba'
                            d='M29 12h242c9.4 0 17 7.6 17 17v153H12V29c0-9.4 7.6-17 17-17z'
                          ></path>
                          <path
                            className='hover-price'
                            fill='#1dbf73'
                            d='M231 288h20c8.3 0 15 6.7 15 15s-6.7 15-15 15h-20c-8.3 0-15-6.7-15-15s6.7-15 15-15z'
                          ></path>
                          <path
                            className='hover-frame'
                            fill='#74767e'
                            d='M270 0H30C13.5 0 0 13.5 0 30v292c0 16.5 13.5 30 30 30h240c16.5 0 30-13.5 30-30V30c0-16.5-13.5-30-30-30zm18 322c0 9.9-8.1 18-18 18H30c-9.9 0-18-8.1-18-18V194h276v128zm0-140H12V30c0-9.9 8.1-18 18-18h240c9.9 0 18 8.1 18 18v152z'
                          ></path>
                          <path
                            className='hover-frame'
                            fill='#b5b6ba'
                            d='M34.5 224h145c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-145c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5zm0 26h95c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-95c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5z'
                          ></path>
                        </svg>

                        <span className='create-btn align-center'>
                          Create a New Gig
                        </span>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <Link to={'/login'}>
          <div className='login-modal'>
            <h2>Click here to log in</h2>
          </div>
        </Link>
      )}
    </section>
  )
}
