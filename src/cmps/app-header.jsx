import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className='app-header main-layout'>
      <div className='flex align-center space-between'>
        <h1 className='logo header-logo'>
          Workerr<span>.</span>
        </h1>
        <nav className='header-nav'>
          <NavLink to='/'>Home </NavLink>
          <NavLink to='/gigs'>Explore </NavLink>
          <NavLink to='/about'>About </NavLink>
          <NavLink to='/user'>User </NavLink>
          <button className='header-join'>
            <NavLink to='/user'>Join </NavLink>
          </button>
        </nav>
      </div>

    </header>
  )
}
