import { Link, useNavigate, useParams } from 'react-router-dom'

export const GigPreview = ({ gig }) => {

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

    </section>
    )
}