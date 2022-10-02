import { NavLink } from 'react-router-dom'

export function AppHeader() {

  const loggedUser = sessionStorage.loggedinUser ? JSON.parse(sessionStorage.loggedinUser) : ''

  return (
    <header className='app-header main-layout'>
      <div className='flex align-center space-between'>
        <h1 className='logo header-logo'>
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
        </nav>
      </div>

    </header>
  )
}
