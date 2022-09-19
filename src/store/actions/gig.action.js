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

export function removeGig(gigId, cb) {
  return (dispatch, getState) => {
    gigService
      .remove(gigId)
      .then(() => {
        dispatch({ type: 'REMOVE_GIG', gigId })
        cb()
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
}

export function addGig(gig) {
  return (dispatch) => {
    return gigService
      .save(gig)
      .then((savedGig) => {
        dispatch({ type: 'ADD_GIG', gig: savedGig })
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
}

export function updateGig(gig) {
  return (dispatch) => {
    return gigService
      .save(gig)
      .then((savedGig) => {
        dispatch({ type: 'UPDATE_GIG', gig: savedGig })
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
