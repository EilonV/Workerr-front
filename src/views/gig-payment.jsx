import { AppHeaderExplore } from '../cmps/app-header-explore'
import { useParams, useNavigate, Link } from 'react-router-dom'

export const GigPayment = () => {
  const navigate = useNavigate()

  return (
    <section>
      <AppHeaderExplore />
      <h1>Thank you for buying!</h1>
      <Link to='/gigs'>
        <button>Go Back</button>
      </Link>
    </section>
  )
}
