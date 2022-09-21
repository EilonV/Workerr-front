import { ReviewPreview } from './review-preview'


export const ReviewList = ({ gigs }) => {
   console.log(gigs)
   
   if (!gigs) return <div className='flex justify-center'>Loading...</div>
 if (gigs)  return (
      <section>
         <div className='review-list'>
            {gigs.map((gig) => (
               <ReviewPreview key={gig._id} gig={gig} />
            ))}
         </div>
      </section>

   )
}



