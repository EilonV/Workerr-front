// import { useFormRegister } from '../hooks/useFormRegister'
// import * as React from 'react'

export const GigSort = ({ gigs }) => {
  if (!gigs) return ''
  console.log(gigs);
  return <section className='gig-sort flex space-between align-center'>
    <p className="services-num ">{gigs.length} services available</p>
    <div className='flex align-center'>
      <p>Sort by&nbsp;</p>
      <select name="" id="">
        <option value="">Best Selling</option>
        <option value="">Newest Arrivals</option>
      </select>
    </div>
  </section>
}
