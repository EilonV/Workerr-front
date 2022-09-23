import { NavLink } from 'react-router-dom'

export function HeaderCategories({ gigs }) {
  return (
    <section className='header-categories-wrapper flex full'>
      <div className='header-categories flex space-between main-layout'>
        <div className='tags flex space-between'>
          <div className='category-section flex align-center'>
            <a href=''>Graphics & Design</a>
          </div>
          <div className='category-section flex align-center'>
            <a href=''>Digital Marketing</a>
          </div>
          <div className='category-section flex align-center'>
            <a href=''>Writing & Translation</a>
          </div>
          <div className='category-section flex align-center'>
            <a href=''>Video & Animation</a>
          </div>
          <div className='category-section flex align-center'>
            <a href=''>Music & Audio</a>
          </div>
          <div className='category-section flex align-center'>
            <a href=''>Programming & Tech</a>
          </div>
        </div>

      </div>
    </section>
  )
}
