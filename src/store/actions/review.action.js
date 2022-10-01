import { reviewService } from '../../services/review.service'

export function loadReviews() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().reviewModule
    try {
      const reviews = await reviewService.query(filterBy)
      dispatch({ type: 'SET_REVIEWS', reviews })
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function removeReview(reviewId, cb) {
  return async (dispatch) => {
    try {
      await reviewService.remove(reviewId)
      dispatch({ type: 'REMOVE_REVIEW', reviewId })
      cb()
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function addReview(review, cb) {
  return async (dispatch) => {
    try {
      const savedReview = await reviewService.add(review)
      // console.log('savedReview:', savedReview)

      dispatch({ type: 'ADD_REVIEWS', review: savedReview })
      cb()
    } catch (err) {
      console.error('Oops:', err)
    }
  }
}

// export function updateReview(review) {
//   return async (dispatch) => {
//     try {
//       const updateReview = await reviewService.save(review)
//       dispatch({ type: 'UPDATE_REVIEW', review: updateReview })
//     } catch (err) {
//       console.log('err:', err)
//     }
//   }
// }

// export function setFilterBy(filterBy) {
//   return (dispatch) => {
//     dispatch({ type: 'SET_FILTER_BY', filterBy })
//   }
// }

// export function sortByReviews(sortBy) {
//   return (dispatch, getState) => {
//     dispatch({ type: 'SET_SORT_BY', sortBy })
//     let { reviews } = getState().reviewModule

//     if (sortBy.sortBy === 'name')
//       reviews = reviews.sort((t1, t2) => t1.name.localeCompare(t2.name))
//     if (sortBy.sortBy === 'price') {
//       reviews = reviews.sort((t1, t2) => t1.price - t2.price)
//     }
//     dispatch({ type: 'SET_REVIEWS', reviews })
//   }
// }
