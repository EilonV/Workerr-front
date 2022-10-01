import { Link, NavLink } from 'react-router-dom'

export function ProfileHeader() {
  return (
    <section className='header-profile flex main-layout'>
      <div className='header flex'>
        <div className='category-section flex align-center'>
          <NavLink to='/user'>Profile</NavLink>
          <NavLink to='/user/orders'>Orders</NavLink>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
