import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs, setFilterBy } from '../store/actions/gig.action'
import { useNavigate, useParams } from 'react-router-dom'
import { GigList } from '../cmps/gig-list'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'
import { GigFilter } from '../cmps/gig-filter'

export const GigExplore = () => {
  const params = useParams()
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadGigs(gigs.price > 652))
  }, [gigs])

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy))
    dispatch(loadGigs())

    console.log(filterBy)
    // console.log(gigs)
  }

  return (
    <section>
      <AppHeaderExplore />
      <GigFilter onChangeFilter={onChangeFilter} />
      <HeaderCategories gigs={gigs} />
      <GigList gigs={gigs} />
    </section>
  )
}
