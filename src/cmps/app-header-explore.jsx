import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { loadGigs, setFilterBy } from '../store/actions/gig.action'
import { useSelector, useDispatch } from 'react-redux'
import { GigFilter } from './gig-filter'
import {
  onLogin,
  onLogout,
  onSignup,
  removeUser,
} from '../store/actions/user.actions'
import { LoginSignup } from './login-signup.jsx'
import { PopoverNav } from './popover-nav.jsx'

export function AppHeaderExplore({ user }) {
  const dispatch = useDispatch()
  const [isSignIn, toggleSignIn] = useState(false)
  const [isSignUp, toggleSignUp] = useState(false)
  const [isPopoverNav, togglePopoverNav] = useState(false)

  // useEffect(() => {
  //   if (isSignIn) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isSignIn])

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())

    // console.log(filterBy)
    // console.log(gigs)
  }

  const handleLogout = () => {
    if (isSignIn) return
    dispatch(onLogout())
    clearState()
    window.location.reload(false)
  }

  const clearState = () => {
    return isSignIn
  }

  const loggedUser = sessionStorage.loggedinUser ? JSON.parse(sessionStorage.loggedinUser) : ''

  return (
    <section className='main-layout full'>
      <header className='app-header-explore'>
        <NavLink to='/'>
          <h1 className='logo'>
            Workerr<span>.</span>
          </h1>
        </NavLink>
        <div className='header-search flex'>
          <GigFilter onChangeFilter={onChangeFilter} />
        </div>
        <nav className='header-nav flex row '>
          <NavLink to='/'>Home </NavLink>
          <NavLink to='/gigs'>Explore </NavLink>
          {sessionStorage.loggedinUser ? (
            <div className='flex'>
              <Link to={`user/`}>
                {/* {user.imgUrl && <img src={user.imgUrl} />}
                            {user.fullname} */}
              </Link>
              <button className='logout-btn' onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <section className=' flex row gap'>
              <div
                className=' header-signin'
                onClick={() => {
                  toggleSignIn(true)
                }}
              >
                Sign in
              </div>

              <div
                className='header-join'
                onClick={() => {
                  toggleSignIn(true)
                  toggleSignUp(true)
                }}
              >
                Join
              </div>
            </section>
          )}
          {loggedUser && <NavLink to='/user'><img className='header-user-img' src={loggedUser.imgUrl} alt="" /></NavLink>}
        </nav>
      </header>
      {isSignIn && !user && (
        <LoginSignup
          toggleSignIn={toggleSignIn}
          toggleSignUp={toggleSignUp}
          isSignUp={isSignUp}
          onLogin={onLogin}
          onSignup={onSignup}
        />
      )}
      {isPopoverNav && (
        <PopoverNav togglePopoverNav={togglePopoverNav} onLogout={onLogout} />
      )}
    </section>
  )
}

function mapStateToProps(state) {
  return {
    user: state.userModule.user,
  }
}
const mapDispatchToProps = {
  onLogin,
  onSignup,
  onLogout,
  removeUser,
}

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeaderExplore)
