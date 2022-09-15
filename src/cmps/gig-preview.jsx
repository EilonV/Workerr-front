import { Link, useNavigate, useParams } from 'react-router-dom'

export const GigPreview = ({ gig }) => {
  return (
    <section className='gig-preview'>
      <Link to={`/gig/edit/${gig._id}`}>
        <img className='img-gig' src={gig.owner.imgUrl} />
        <img className='img-user' src={gig.imgUrl} />
        {gig.owner && <p> {gig.owner.fullname}</p>}
        <p>{gig.title}</p>
        <p>{`$` + gig.price}</p>
        <p>{gig.description}</p>
      </Link>
    </section>
  )
}
