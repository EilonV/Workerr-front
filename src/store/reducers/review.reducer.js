const INITIAL_STATE = {
  reviews: [],
  // filtereviewBy: {
  //   title: '',
  //   tags: [],
  //   userId: '',
  // },
  page: null,
}

export function reviewReducer(state = INITIAL_STATE, action) {
  var newState = state
  var reviews
  console.log('reviews:', reviews)

  // var page

  switch (action.type) {
    case 'SET_PAGE':
      newState = { ...state, page: action.page }
      break
    case 'SET_REVIEWS':
      newState = { ...state, reviews: action.reviews }
      break
    case 'REMOVE_REVIEW':
      const lastRemovedReview = state.reviews.find(
        (review) => review._id === action.reviewId
      )
      reviews = state.reviews.filter((review) => review._id !== action.reviewId)
      newState = { ...state, reviews, lastRemovedReview }
      break
    case 'ADD_REVIEW':
      newState = { ...state, reviews: [...state.reviews, action.review] }
      break
    case 'UPDATE_REVIEW':
      reviews = state.reviews.map((review) =>
        review._id === action.review._id ? action.review : review
      )
      newState = { ...state, reviews }
      break
    case 'SET_FILTER_BY':
      console.log(state.filterBy)
      return { ...state, filterBy: action.filterBy }
    default:
      newState = state

    // For debug:
    // window.reviewState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
  }
  return newState
}
