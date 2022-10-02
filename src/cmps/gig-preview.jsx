import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

export const GigPreview = ({ gig }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  // console.log('gig.owner.rate.length:', gig.owner.rate)

  const getRate = () => {
    let rate = 0
    gig.reviews.map((review) => (rate += review.rate))
    console.log(':', (rate / gig.reviews.length).toFixed(1))
    if (rate !== 0) return (rate / gig.reviews.length).toFixed(1)
    return 0
  }

  if (!gig) return ''
  return (
    <section className='gig-preview'>
      <Link to={`/gig/details/${gig._id}`}>
        <div className='slick-container'>
          <Slider {...settings}>
            {gig.imgUrl &&
              gig.imgUrl.map((img) => <img className='img-gig' src={img} />)}
          </Slider>
        </div>
      </Link>
      <div className='gig-owner-info gig-owner-info-wrapper flex align-center'>
        {
          <img
            className='gig-owner-image'
            src={gig.owner.imgUrl}
            alt='gig owner image'
          />
        }

        <div className='owner-username-level'>
          {/* need to adjust dynamically to user */}
          <p>
            <span>{gig.owner.username}</span>
          </p>
          {/* need to adjust dynamically to user */}
          <p>Level 3 seller</p>
        </div>
      </div>

      <Link to={`/gig/details/${gig._id}`}>
        <p className='gig-title'>{gig.title}</p>
      </Link>

      <div className='gig-reviews-card flex'>
        <svg
          className='gig-review-star'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1792 1792'
          width='16'
          height='16'
        >
          <path
            fill='#ffbe5b'
            d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'
          />
        </svg>
        {gig.owner.rate > 0 ? (
          <p>&nbsp;{getRate()}</p>
        ) : (
          getRate() === NaN && <p>&nbsp; 0</p>
        )}
        <div className='flex'>
          <p className='user-reviews-count'>({gig.reviews.length})</p>
        </div>
      </div>

      <div className='gig-footer flex space-between align-center'>
        <div className='gig-footer-icons flex align-center'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#b5b6ba'
              d='M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z'
            />
          </svg>
        </div>
        <Link to={`/gig/details/${gig._id}`}>
          <div className='gig-footer-pricing'>
            <p className='gig-starting'>STARTING AT</p>
            <p className='gig-price-card'>${gig.price}</p>
          </div>
        </Link>
      </div>
      {/* <p>{`$` + gig.price}</p> */}
    </section>
  )
}
