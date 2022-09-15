import { Link, useNavigate, useParams } from 'react-router-dom'

export const GigPreview = ({ gig }) => {

    return <section className="gig-preview">
        <Link to={`/gig/details/${gig._id}`} >
            <h1>GIG PREVIEW</h1>
            <p>{gig.title}</p>
            <p>{gig.price}</p>
            <p>{gig.description}</p>
            {gig.owner && <p>created by: {gig.owner.fullname}</p>}
        </Link>
    </section>
}