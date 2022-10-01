import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs, setFilterBy } from '../store/actions/gig.action'
import { useNavigate, useParams } from 'react-router-dom'
import { GigList } from '../cmps/gig-list'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { GigFilter } from '../cmps/gig-filter'
import { loadUsers } from '../store/actions/user.actions'
import { GigSort } from '../cmps/gig-sort'
import { GigFilterExplore } from '../cmps/gig-filter-explore'

export const GigExplore = () => {
  const params = useParams()
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadGigs())
  }, [])

  const onChangeFilter = (filterBy) => {
    console.log('filterBy', filterBy)
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())

    // console.log(filterBy)
    // console.log(gigs)
  }

  return (
    <section className='main-layout'>
      <AppHeaderExplore />
      <HeaderCategories gigs={gigs} />
      <GigFilterExplore onChangeFilter={onChangeFilter} gigs={gigs} />
      <GigSort gigs={gigs} />
      <GigList gigs={gigs} />
    </section>
  )
}
