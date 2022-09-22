import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className='app-header main-layout'>
      <h1 className='logo header-logo'>
        Workerr<span>.</span>
      </h1>
      <nav className='header-nav'>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='/gigs'>Explore </NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/user'>User </NavLink>
        <NavLink to='/admin'>Admin </NavLink>
        <button className='header-join'><NavLink to='/login'>Join </NavLink></button>
      </nav>
    </header>
  )
}
