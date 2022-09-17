import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { addGig, updateGig } from '../store/actions/gig.action'

export const GigEdit = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [gig, handleChange, setGig] = useForm({
    title: '',
    price: '',
  })

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    const gigId = params.id
    if (!gigId) return
    gigService
      .getById(gigId)
      .then((gig) => {
        setGig(gig)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }, [])

  const onSaveGig = (ev) => {
    ev.preventDefault()
    if (gig._id) {
      dispatch(updateGig(gig)).then(() => {
        navigate('/gigs')
      })
    } else {
      dispatch(addGig(gig)).then(() => {
        navigate('/gigs')
      })
    }
  }

  return (
    <section className='gig-edit'>
      <h1>{gig._id ? 'Edit' : 'Add'} Gig</h1>
      <form onSubmit={onSaveGig}>
        <label htmlFor='name'>Title</label>
        <input
          ref={inputRef}
          value={gig.title}
          onChange={handleChange}
          type='text'
          name='title'
          id='title'
        />

        <label htmlFor='price'>Price</label>
        <input
          value={gig.price}
          onChange={handleChange}
          type='number'
          name='price'
          id='price'
        />
        <button>Update</button>
      </form>
    </section>
  )
}
