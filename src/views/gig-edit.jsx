import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { addGig, updateGig } from '../store/actions/gig.action'

export const GigEdit = () => {
  const loggedinUser = sessionStorage.loggedinUser
    ? JSON.parse(sessionStorage.loggedinUser)
    : ''

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const title = 'I will '
  const [gig, handleChange, setGig] = useForm({
    title: title,
    price: '',
    daysToMake: '',
    longerDescription: '',
    tags: [],
    order: '',
    imgUrl: [],
    owner: {
      _id: loggedinUser._id,
      fullname: loggedinUser.fullname,
      ownerCountry: loggedinUser.country,
      imgUrl: loggedinUser.imgUrl,
      memberSince: loggedinUser.memberSince,
      username: loggedinUser.username,
      password: loggedinUser.password,
      rate: loggedinUser.rate.toFixed(1),
      // avgResponseTime: '1 hour',
      // lastDelivery: 'about 17 hours',
      ownerLetter: loggedinUser.ownerLetter,
      reviews: loggedinUser.reviews,
    },
  })

  const inputRef = useRef()

  useEffect(() => {
    // inputRef.current.focus()
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

  // const onSaveGig = async (ev) => {
  //   ev.preventDefault()
  //   if (gig._id) dispatch(updateGig(gig))
  //   else dispatch(addGig(gig))
  //   navigate('/gigs')
  // }

  const onSaveGig = (ev) => {
    ev.preventDefault()
    if (gig._id) {
      dispatch(updateGig(gig)).then(() => {
        navigate('/user')
      })
    } else {
      dispatch(addGig(gig)).then(() => {
        navigate('/gigs')
      })
    }
  }

  return (
    <section className='gig-edit main-layout'>
      <AppHeaderExplore />
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
