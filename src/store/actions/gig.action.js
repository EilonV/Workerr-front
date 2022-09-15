import { gigService } from '../../services/gig.service'

export function loadGigs() {
  return (dispatch, getState) => {
    const { filterBy } = getState().gigModule
    gigService
      .query(filterBy)
      .then((gigs) => {
        dispatch({ type: 'SET_GIGS', gigs })
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
}

export function removeGig(gigId) {
  return (dispatch, getState) => {
    gigService
      .remove(gigId)
      .then(() => {
        dispatch({ type: 'REMOVE_GIG', gigId })
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
