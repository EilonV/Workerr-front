import StarFill from '../assets/imgs/icons/5-stars.svg'

export const AddReview = () => {
  return (
    <section className='reviews-container'>
      <div>
        <h2>Rate & Review</h2>
        <p>
          Share with the community your experience when working with this
          seller.
        </p>
        <div className='rates'>
          <h2>Communication With Seller</h2>
          <p>How responsive was the seller during the process?</p>
          <select name='' id=''>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
            <option value='five'>5</option>
          </select>
          {/* <img className='gig-review-star' src={StarFill} alt='star-fill' /> */}
        </div>
        <h2>Service as Described</h2>
        <p>Did the result match the Gig's description?</p>
        <select name='' id=''>
          <option value='one'>1</option>
          <option value='two'>2</option>
          <option value='three'>3</option>
          <option value='four'>4</option>
          <option value='five'>5</option>
        </select>
        {/* <img className='gig-review-star' src={StarFill} alt='star-fill' /> */}
        <h2>Buy Again or Recommend</h2>
        <p>Would you recommend buying this Gig?</p>
        <select name='' id=''>
          <option value='one'>1</option>
          <option value='two'>2</option>
          <option value='three'>3</option>
          <option value='four'>4</option>
          <option value='five'>5</option>
        </select>
        {/* <img className='gig-review-star' src={StarFill} alt='star-fill' /> */}
      </div>
      <div>
        <textarea name='' id='' cols='30' rows='10'>
          Tell Your Story (Optional)
        </textarea>
      </div>
    </section>
  )
}
