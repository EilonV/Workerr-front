import { NavLink } from 'react-router-dom'

export function ProfileHeader() {
  return (
    <section className='header-profile flex main-layout'>
      <div className='header flex'>
        <div className='category-section flex align-center'>
          <NavLink to='/user'>Profile</NavLink>
          <NavLink to='/user/orders'>Orders</NavLink>
          <NavLink to='/user/orders/seller'>Seller Orders</NavLink>
        </div>
      </div>
    </section>
  )
}
