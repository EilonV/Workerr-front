import { NavLink } from 'react-router-dom'

export function AppHeaderScroll() {

  const loggedUser = sessionStorage.loggedinUser ? JSON.parse(sessionStorage.loggedinUser) : ''

  return (
    <div className='header-scroll'>
      <header className='app-header-scroll main-layout'>
        <div className='flex align-center space-between'>
          <h1 className='logo-scroll header-logo'>
            Workerr<span>.</span>
          </h1>
          <nav className='header-nav flex align-center'>
            <NavLink to='/gigs'>Explore </NavLink>
            {loggedUser &&
              <div className='header-nav flex align-center'>
                <NavLink to='/user/orders'>Orders</NavLink>
                <NavLink to='/user'><img className='header-user-img' src={loggedUser.imgUrl} alt="" /></NavLink>
              </div>
            }
            {!loggedUser &&
              <div className='header-nav'>
                <NavLink to='/user'>Sign in</NavLink>
                <button className='header-join'>
                  <NavLink to='/user'>Join </NavLink>
                </button>
              </div>
            }
            {/* <NavLink to='/user'>User </NavLink> */}
            {/* <button className='header-join'><NavLink to='/user'>Join </NavLink></button> */}
          </nav>
        </div>

      </header>
    </div>

  )
}
