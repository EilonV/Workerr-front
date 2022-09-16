import { Link, useNavigate, useParams } from 'react-router-dom'

export const GigPreview = ({ gig }) => {
<<<<<<< HEAD

    return (<section className='gig-preview-wrapper'>
        <div className='gig-preview'>
            <Link to={`/gig/edit/${gig._id}`} >
                <p>{gig.url}</p>
                <p>{gig.title}</p>
                <p>{gig.price}</p>
                <p>{gig.description}</p>
                {gig.owner && <p>created by: {gig.owner.fullname}</p>}
            </Link>
        </div>

=======
  return (
    <section className='gig-preview'>
      <Link to={`/gig/edit/${gig._id}`}>
        <img className='img-gig' src={gig.owner.imgUrl} />
        {/* <img className='img-user' src={gig.imgUrl} /> */}
        {gig.owner && <p> {gig.owner.fullname}</p>}
        <p>{gig.title}</p>
        <p>{`$` + gig.price}</p>
        <p>{gig.description}</p>
      </Link>
>>>>>>> 775f0b713afc866215f2ffc4732f1a19cdf25ece
    </section>
  )
}
