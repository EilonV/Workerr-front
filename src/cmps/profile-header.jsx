import { Link, NavLink } from 'react-router-dom'

export function ProfileHeader() {
  return (
    <section className='header-profile flex full'>
      <div className='header flex space-around main-layout'>
        <div className='category-section flex space-between align-center'>
          <div className=''>
            <NavLink to='/user'>Profile</NavLink>
          </div>
          {/* <div className='category-section flex align-center'> */}
          <NavLink to='/user/orders'>Your Orders</NavLink>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
