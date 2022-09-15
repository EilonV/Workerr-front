import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gigService } from '../services/gig.service'
import { loadGigs } from '../store/actions/gig.action'
import { useForm } from '../hooks/useForm'
import { useNavigate, useParams } from 'react-router-dom'
import { GigList } from '../cmps/gig-list'

export const GigExplore = () => {
  const gigs = useSelector((state) => state.gigModule.gigs)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadGigs())
  }, [])

  const [gig, handleChange, setGig] = useForm({
    title: '',
    price: '',
    description: '',
    owner: '',
    createdAt: Date.now(),
  })

  const onSaveGig = (ev) => {
    ev.preventDefault()
    gigService.save({ ...gig }).then(() => {
      navigate('/explore')
    })
  }

  return (
    <section>
      <GigList gigs={gigs} />
    </section>
  )
}
