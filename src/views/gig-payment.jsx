import { AppHeaderExplore } from '../cmps/app-header-explore'
import { useParams, useNavigate, Link } from 'react-router-dom'
import App from '../cmps/alert-message'

export const GigPayment = () => {
  return (
    <section className='main-layout'>
      <AppHeaderExplore />
      <div className='gig-container full'>
        <div className='modal flex'>
          <App />
        </div>
        {/* <p>
          Your order has been received by the user, you can see it
          <span className='link'>
            <Link to='/user/orders'>&nbsp;here&nbsp;</Link>
          </span>
        </p>
        <Link to='/gigs'>
          <button className='back-btn'>Go to Gigs</button>
        </Link> */}
      </div>
    </section>
  )
}
