import { ReviewPreview } from './review-preview'


export const ReviewList = ({ reviews }) => {
   // console.log(reviews)

 if (reviews)  return (
      <section>
         <div className='reviews-list'>
            {reviews.map((review) => (
               <ReviewPreview key={review._id} review={review} />
            ))}
         </div>
      </section>

   )
}



