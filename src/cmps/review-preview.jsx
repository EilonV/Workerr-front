import StarFill from '../assets/imgs/icons/5-stars.svg'

export const ReviewPreview = ({ review }) => {
  if (!review) return ''

  return (
    <section>
      <div className='seller-reviews flex column'>
        <div className='flex row gap'>
          <img
            className='user-review-img border-radius'
            src={review.by.imgUrl}
            alt='user avatar'
          />

          <div className='inner-container flex column'>
            <div className=' user-name-svg flex row gap'></div>

            <div className=' user-name-svg flex row gap'>
              <div>
                <h4>{review.by.fullname}</h4>
                {/* <span>{review.rate}</span> */}
                <div className='user-country-flag flex row gap'>
                  <img src={review.by.flag} alt=''></img>
                  <span>{review.by.country}</span>
                </div>
                <img
                  className='gig-review-star'
                  src={StarFill}
                  alt='star-fill'
                />
              </div>
            </div>

            <p className='user-review-txt'>{review.txt}</p>
            <h5 className='reviewed-at'>{review.by.reviewedAt}</h5>
          </div>
        </div>

        <h5 className='reviewed-at'></h5>
      </div>

    </section>
  )
}
