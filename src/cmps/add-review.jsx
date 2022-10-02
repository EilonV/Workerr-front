import StarFill from '../assets/imgs/icons/5-stars.svg'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { reviewService } from '../services/review.service'
import {
  // addReview,
  updateReview,
  removeReview,
} from '../store/actions/review.action'
// import { AppHeaderExplore } from '../cmps/app-header-explore'
// import { HeaderCategories } from '../cmps/header-categories'
// import { uploadService } from '../services/upload.service'
// import { userService } from '../services/user.service'
import dateFormat, { masks } from 'dateformat'

export const AddReview = ({ gig }) => {
  // console.log('gig:', gig)

  const loggedinUser = sessionStorage.loggedinUser
    ? JSON.parse(sessionStorage.loggedinUser)
    : ''
  // console.log('loggedinUser:', loggedinUser)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const reviews = useSelector((state) => state.reviewModule.reviews)
  // console.log('reviews:', reviews)

  const [review, handleChange, setReview] = useForm({
    txt: '',
    rate: '',
    by: {
      _id: loggedinUser._id,
      fullname: loggedinUser.username,
      imgUrl: loggedinUser.imgUrl,
      country: loggedinUser.country,
      flag: loggedinUser.flag,
      reviewedAt: loggedinUser.reviewedAt,
      memberSince: loggedinUser.memberSince,
      reviewedAt: 'Published at ' + dateFormat(new Date()),
    },
  })
  // console.log('review:', review)

  const addReview = () => {
    gig.reviews.unshift(review)
  }

  // useEffect(() => {
  //   //  inputRef.current.focus()
  //   const reviewId = params.id
  //   if (!reviewId) return
  //   reviewService
  //     .getById(reviewId)
  //     .then((review) => {
  //       console.log('review:', review)

  //       setReview(review)
  //     })
  //     .catch((err) => {
  //       console.log('err:', err)
  //     })
  // }, [])

  const onSaveReview = () => {
    // console.log('onSaveReview:active')
    //  ev.preventDefault()
    dispatch(
      addReview(gig.reviews, () => {
        navigate('/reviews/:id')
        // refreshPage()
      })
    )
  }

  // const onRemove = async (reviewId) => {
  //   await removeReview(reviewId)
  // }

  const handleSelect = (ev) => {
    // console.log('ev:', +ev.target.value)
    const updatedReviews = [
      { ...gig.reviews, txt: +ev.target.value, rate: ev.target.value },
    ]
    console.log('updatedReviews:', updatedReviews)

    setReview({ ...gig.reviews, tags: updatedReviews })
  }

  // if (!gig.reviews) return ''
  return (
    <section className='reviews-container'>
      {/* <form> */}
      <div className='rate-reviews'>
        <h2>Rate & Review</h2>
        <p className='share'>
          Share with the community your experience when working with this
          seller.
        </p>
        <div className='rates'>
          <h2>Communication With Seller</h2>
          <p>How was your experience with the seller?</p>
          <select
            name='rate'
            id='rate'
            onChange={handleChange}
            value={gig.rate}
          >
            <option value='1'>Very bad</option>
            <option value='2'>Bad</option>
            <option value='3'>OK</option>
            <option value='4'>Good</option>
            <option value='5'>Great</option>
          </select>
          {/* <img className='review-review-star' src={StarFill} alt='star-fill' /> */}
        </div>
        {/* <h2>Service as Described</h2>
          <p>Did the result match the Review's description?</p>
          <select
            name='rate'
            id='rate'
            onChange={handleSelect}
            value={gig.gig.rate}
          >
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
          {/* <img className='review-review-star' src={StarFill} alt='star-fill' /> */}
        {/* <h2>Buy Again or Recommend</h2>
          <p>Would you recommend buying this Review?</p>
          <select
            name='rate'
            id='rate'
            onChange={handleSelect}
            value={gig.gig.rate}
          >
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>  */}
        {/* <img className='review-review-star' src={StarFill} alt='star-fill' /> */}
      </div>
      <div className='review-inputs flex'>
        <textarea
          value={gig.txt}
          onChange={handleChange}
          name='txt'
          id='txt'
          cols='30'
          rows='10'
        ></textarea>
        <Link onClick={onSaveReview} to={`/gig/details/${gig._id}`}>
          <button>Add</button>
        </Link>
      </div>
      {/* </form> */}
    </section>
  )
}
