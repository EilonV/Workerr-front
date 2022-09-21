import { ReviewPreview } from './review-preview'


export const ReviewList = ({ reviews }) => {
   console.log(reviews)
   
   if (!reviews) return <div className='flex justify-center'>Loading...</div>
 if (reviews)  return (
      <section>
         <div className='review-list'>
            {/* {reviews.map((gig) => (
               <ReviewPreview key={gig._id} gig={gig} />
            ))} */}
         </div>
      </section>

   )
}



