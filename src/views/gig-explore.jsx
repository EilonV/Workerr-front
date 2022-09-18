import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGigs } from '../store/actions/gig.action'
import { useNavigate, useParams } from 'react-router-dom'
import { GigList } from '../cmps/gig-list'
import { AppHeaderExplore } from '../cmps/app-header-explore'

export const GigExplore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadGigs())
  }, [gigs])

  return (
    <section>
      <AppHeaderExplore />
      <GigList gigs={gigs} />
    </section>
  )
}
