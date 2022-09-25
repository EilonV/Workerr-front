import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { gigService } from '../services/gig.service'
import { addGig, updateGig } from '../store/actions/gig.action'
import { utilService } from '../services/util.service'
import { AppHeaderExplore } from '../cmps/app-header-explore'
import { HeaderCategories } from '../cmps/header-categories'

export const AddNewGig = () => {
  // const params = useParams()

  // const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const [gig, handleChange, setGig] = useForm({
  //   title: 'I will',
  //   price: '',
  //   daysToMake: '',
  //   longerDescription: '',
  //   tags: '',
  //   order: '',
  //   imgUrl: utilService.makeImg(),
  //   tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
  //   owner: {
  //     _id: 'u101',
  //     fullname: 'Dudu Da',
  //     imgUrl: 'https://i1.sndcdn.com/artworks-000118768405-0t6s1f-t500x500.jpg',
  //     level: 'premium',
  //     rate: 0,
  //     memberSince: 'march 2015',
  //     avgResponseTime: '1 hour',
  //     lastDelivery: 'about 17 hours',
  //     ownerLetter:
  //       ' Hi, Mayur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
  //   },
  //   user: [{ reviews: '' }],
  // })

  // const inputRef = useRef()
  // console.log(inputRef)

  // useEffect(() => {
  //   // inputRef.current.focus()
  //   const gigId = params.id
  //   if (!gigId) return
  //   gigService
  //     .getById(gigId)
  //     .then((gig) => {
  //       setGig(gig)
  //     })
  //     .catch((err) => {
  //       console.log('err:', err)
  //     })
  // }, [])

  // const onSaveGig = (ev) => {
  //   ev.preventDefault()
  //   if (gig._id) {
  //     dispatch(updateGig(gig)).then(() => {
  //       navigate('/gigs')
  //     })
  //   } else {
  //     dispatch(addGig(gig)).then(() => {
  //       navigate('/gigs')
  //     })
  //   }
  // }

  return (
    <section classNameName='main-container'>
      <AppHeaderExplore />
      <HeaderCategories />
      <section classNameName='content-container'>
        <div classNameName='create-container flex column'>
          <div classNameName='title-container flex'>
            <div classNameName='title-nav'>
              <div classNameName='desc' htmlFor='name'>
                <h1>Gig Title</h1>
              </div>
              <p>
                As your Gig storefront, your title is the most important place
                to include keywords that buyers would likely use to search for a
                service like yours.
              </p>
            </div>

            <div classNameName='text-area'>
              <textarea placeholder="I will do something I'm really good at"></textarea>

              <div className='title-footer flex space-between'>
                <span className='title-status-msg '></span>
                <span className='chars-count'>0 / 80 max</span>
              </div>
            </div>
          </div>

          <div classNameName='category-container flex'>
            <div classNameName='title-nav category'>
              <div classNameName='desc' htmlFor='name'>
                <h1>Category</h1>
              </div>
              <p>
                Choose the category and sub-category most suitable for your Gig.
              </p>
            </div>

            <div classNameName='selection-bar flex space-between'>
              <select name='tags' id='tag-select'>
                <option value='digital-marketing'>Digital Marketing</option>
                <option value='wWriting-translation'>
                  Writing & Translation
                </option>
                <option value='video-animation'>Video & Animation</option>
                <option value='music-audio'>Music & Audio</option>
                <option value='programming-Tech'>Programming & Tech</option>
                <option value='data'>Data</option>
                <option value='busines'>Busines</option>
                <option value='lifeStyle'>LifeStyle</option>
              </select>
              <select name='tags' id='tag-select'>
                {/* <option value='digital-marketing'>Digital Marketing</option>
                <option value='wWriting-translation'>
                  Writing & Translation
                </option>
                <option value='video-animation'>Video & Animation</option>
                <option value='music-audio'>Music & Audio</option>
                <option value='programming-Tech'>Programming & Tech</option>
                <option value='data'>Data</option>
                <option value='busines'>Busines</option>
                <option value='lifeStyle'>LifeStyle</option> */}
              </select>
              <div className='title-footer flex space-between'></div>
            </div>
          </div>

          <div classNameName='tag-container flex '>
            <div classNameName='tag-nav'>
              <div classNameName='desc'>
                <h1>Search Tags</h1>
              </div>
              <p>
                Tag your Gig with buzz words that are relevant to the services
                you offer. Use all 5 tags to get found.
              </p>
            </div>
            <div classNameName='search-tags'>
              <div classNameName='desc' htmlFor='name'>
                <h1>Positive keywords</h1>
                <p>
                  Enter search terms you feel your buyers will use when looking
                  for your service.
                </p>
                <textarea placeholder=''></textarea>
                <h6>5 tags maximum. Use letters and numbers only.</h6>
              </div>
            </div>
          </div>
          <div classNameName='note'>
            <p>
              <span>Please note: </span> Some categories require that sellers
              verify their skills.
            </p>
          </div>
        </div>

        {/* <form onSubmit={onSaveGig}> */}

        <div classNameName='btn'>
          <Link to='/gigs/:'>
            <span classNameName='create-btn align-center'>Save & Continue</span>
          </Link>
        </div>
      </section>
    </section>
  )
}
