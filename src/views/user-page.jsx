import { useState,useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { userService } from '../services/user.service'
import { removeUser,updateUser } from '../store/actions/user.actions'
import { addGig, updateGig } from '../store/actions/gig.action'
import { utilService } from '../services/util.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'

export const UserPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const id = params.id
    loadUser(id)
  }, [])

  const loadUser = async (userId) => {
    const user = await userService.getById(userId)
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

  console.log(user);
  return (
    <section className='gig-profile-container'>
      <div className='navs'>
        <AppHeaderExplore />
        <HeaderCategories />
      </div>

      <div className='profile-user flex'>
        <div className='user-container '>
          <div className='profile-pic'>U</div>
          <div className='user-name show'>user</div>
          <div className='user-name edit'>
            <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' className=''><path d='M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z' className='st-current'></path></svg></div>
          <a className='profile-btn' text='seller_card.view_as_buyer' href='/ilyaig8?public_mode=true'>
            Preview Fiverr Profile
          </a>
          <div className='user-details'>
            <div className='from-since flex column'>
              <svg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg' className=''><g clip-path='url(#clip0)'>
                <path d='M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z'></path></g><defs><clipPath id='clip0'><rect width='12' height='16'></rect></clipPath></defs></svg>
              <p className='from'>From</p>
              <p className='country'>Israel</p>
            </div>
            <div className='member flex column'>
              <svg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg' className=''><g clip-path='url(#clip0)'><path d='M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z' className='st-current'></path></g><defs><clipPath id='clip0'> <rect width='12' height='16'></rect> </clipPath></defs></svg>
              <p className='member-since'>Member since</p>
              <p className='year'>2021</p>
            </div>
          </div>
        </div>
        <div>
          <div className='my-orders'>
            <h1>ACTIVE GIGS</h1>
          </div>

          <div className='new-gig'>
            <label>
              <h3 className='active-gigs'>
                It seems that you don't have any active Gigs
              </h3>
            </label>
            <div className='img-create'>
              <a href='/users/ilyaig8/manage_gigs/new' className='st-current'>
                <svg className='svg' xmlns='http://www.w3.org/2000/svg' width='300' height='352' viewBox='0 0 300 352'>
                  <title>Create a Gig</title>
                  <path className='hover-block' fill='#F8F7F7' d='M29 12h242c9.4 0 17 7.6 17 17v153H12V29c0-9.4 7.6-17 17-17z'></path>
                  <path className='hover-price' fill='#B1D8BA' d='M231 288h20c8.3 0 15 6.7 15 15s-6.7 15-15 15h-20c-8.3 0-15-6.7-15-15s6.7-15 15-15z'></path>
                  <path className='hover-frame' fill='#B3B2B2' d='M270 0H30C13.5 0 0 13.5 0 30v292c0 16.5 13.5 30 30 30h240c16.5 0 30-13.5 30-30V30c0-16.5-13.5-30-30-30zm18 322c0 9.9-8.1 18-18 18H30c-9.9 0-18-8.1-18-18V194h276v128zm0-140H12V30c0-9.9 8.1-18 18-18h240c9.9 0 18 8.1 18 18v152z'></path>
                  <path className='hover-frame' fill='#B3B2B2' d='M34.5 224h145c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-145c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5zm0 26h95c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-95c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5z'></path></svg>
                <Link to='/user/:'>
                  <span className='create-btn align-center'>
                    Create a New Gig
                  </span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
