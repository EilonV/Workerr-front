// import { useFormRegister } from '../hooks/useFormRegister'
// import * as React from 'react'

export const GigSort = ({ gigs }) => {

  const onSortByPrice = (ev) => {
    if (ev.target[0].value === 'price') {
      console.log('its by price')
      // console.log(gigs);
      // gigs.sort((a, b) => { a - b, a.price - b.price })
    }
  }
  console.log(gigs);
  gigs.sort((a, b) => a.price < b.price)
  console.log(gigs);
  if (!gigs) return ''
  return <section className='gig-sort flex space-between align-center'>
    <p className="services-num ">{gigs.length} services available</p>
    <div className='flex align-center'>
      <p>Sort by&nbsp;</p>
      <select name="" id="" onChange={onSortByPrice}>
        <option value="price" >Price</option>
        <option value="rate">Highest Rated</option>
      </select>
    </div>
  </section>
}
