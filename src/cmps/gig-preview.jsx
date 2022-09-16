import { Link, useNavigate, useParams } from 'react-router-dom'

export const GigPreview = ({ gig }) => {
    console.log(gig)
    return (
        <section className='gig-preview'>
            <Link to={`/gig/details/${gig._id}`}>
                <img className='img-gig' src={gig.imgUrl} />
                <div className='gig-owner-info'>
                    <div>
                        {<img src={gig.owner.imgUrl} alt="gig owner image" />}
                        <p>Username</p>
                    </div>
                </div>
                {gig.owner && <p> {gig.owner.fullname}</p>}
                <p>{gig.title}</p>
                <p>{`$` + gig.price}</p>
                <p>{gig.description}</p>
            </Link>
        </section>
    )
}
