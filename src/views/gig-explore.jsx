import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs } from '../store/actions/gig.action'
import { useNavigate, useParams } from 'react-router-dom'
import { GigList } from '../cmps/gig-list'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'

export const GigExplore = () => {
  const params = useParams()
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadGigs())
  }, [gigs])

  return (
    <section>
      <AppHeaderExplore />
      <HeaderCategories gigs={gigs} />
      <GigList gigs={gigs} />
    </section>
  )
}
