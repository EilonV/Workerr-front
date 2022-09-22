import { NavLink } from 'react-router-dom'

export function AppHeaderScroll() {
  return (
    <div className='header-scroll'>
      <header className='app-header-scroll main-layout'>
<<<<<<< HEAD
        <div className='flex align-center space-between'>
          <h1 className='logo-scroll header-logo'>
            Workerr<span>.</span>
          </h1>
          <nav className='header-nav'>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/gigs'>Explore </NavLink>
            <NavLink to='/about'>About </NavLink>
            <NavLink to='/user'>User </NavLink>
            <NavLink to='/admin'>Admin </NavLink>
            <button className='header-join'><NavLink to='/user'>Join </NavLink></button>
          </nav>
        </div>

=======
        <h1 className='logo-scroll header-logo'>
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
>>>>>>> 69465b68afacebf372bcaa63aed0563ab12128cc
      </header>
    </div>

  )
}
