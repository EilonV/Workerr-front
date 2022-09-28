import StarFill from '../assets/imgs/icons/5-stars.svg'

export const AddReview = () => {
  return (
    <section className=''>
      <div>
        <h2>Rate & Review</h2>
        <p>
          Share with the community your experience when working with this
          seller.
        </p>
        <div className='rates'>
          <h2>Communication With Seller</h2>
          <p>How responsive was the seller during the process?</p>
          <img className='gig-review-star' src={StarFill} alt='star-fill' />
        </div>
        <h2>Service as Described</h2>
        <p>Did the result match the Gig's description?</p>
        <img className='gig-review-star' src={StarFill} alt='star-fill' />
        <h2>Buy Again or Recommend</h2>
        <p>Would you recommend buying this Gig?</p>
        <img className='gig-review-star' src={StarFill} alt='star-fill' />
      </div>
      <div>
        <textarea name='' id='' cols='30' rows='10'>
          Tell Your Story (Optional)
        </textarea>
      </div>
    </section>
  )
}
