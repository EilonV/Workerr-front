import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { addGig, updateGig } from '../store/actions/gig.action'
import { utilService } from '../services/util.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'

export const UserPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [gig, handleChange, setGig] = useForm({
    title: 'I will',
    price: '',
    daysToMake: '',
    longerDescription: '',
    tags: '',
    order: '',
    imgUrl: utilService.makeImg(),
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    owner: {
      _id: 'u101',
      fullname: 'Dudu Da',
      imgUrl: 'https://i1.sndcdn.com/artworks-000118768405-0t6s1f-t500x500.jpg',
      level: 'premium',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        ' Hi, Mayur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    user: [{ reviews: '' }],
  })

  const inputRef = useRef()
  // console.log(inputRef)

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
      <AppHeaderExplore />
      <h1>{'Add'} Gig</h1>
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

        <label>
          Days To Make
          <input
            placeholder='Days To Make'
            type='number'
            id='daysToMake'
            name='daysToMake'
            className='input-field'
            required
          />
        </label>

        <div className='gig-container'>
          <label htmlFor='price'>Price</label>
          <input
            value={gig.price}
            onChange={handleChange}
            type='number'
            name='price'
            id='price'
          />
        </div>

        <div className='gig-container'>
          <label htmlFor='desc'>Description</label>
          <textarea
            name='desc'
            rows='5'
            cols='60'
            type='text'
            placeholder='Enter Gig Desc...'
            required=''
            autocomplete='off'
          ></textarea>
        </div>

        <div className='gig-container'>
          <label htmlFor='tag'>Add some tags</label>
          <input
            placeholder='Add tags..'
            value={gig.tags}
            onChange={handleChange}
            type='text'
            name='tag'
            id='tag'
          />
        </div>

        <button>Add</button>
      </form>
    </section>
  )
}
