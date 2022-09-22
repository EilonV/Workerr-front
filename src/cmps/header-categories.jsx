import { NavLink } from 'react-router-dom'

export function HeaderCategories({ gigs }) {
  return (
    <section className='header-categories-wrapper flex'>
      <div className='header-categories flex space-between main-layout'>
        <div className='tags flex space-between'>
          <a href=''>Graphics & Design</a>
          <a href=''>Digital Marketing</a>
          <a href=''>Writing & Translation</a>
          <a href=''>Video & Animation</a>
          <a href=''>Music & Audio</a>
          <a href=''>Programming & Tech</a>
        </div>

      </div>
    </section>
  )
}
