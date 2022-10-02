import { gigService } from '../../services/gig.service'

export function loadGigs() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().gigModule
    try {
      const gigs = await gigService.query(filterBy)
      dispatch({ type: 'SET_GIGS', gigs })
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function removeGig(gigId, cb) {
  return async (dispatch) => {
    try {
      await gigService.remove(gigId)
      dispatch({ type: 'REMOVE_GIG', gigId })
      cb()
    } catch (err) {
      console.error('err:', err)
    }
  }
}

export function addGig(gig, cb) {
  console.log('gig:', gig)

  return async (dispatch) => {
    try {
      const savedGig = await gigService.save(gig)
      // console.log('savedGig:', savedGig)

      dispatch({ type: 'ADD_GIG', gig: savedGig })
      cb()
    } catch (err) {
      console.error('Oops:', err)
    }
  }
}

export function updateGig(gig) {
  return async (dispatch) => {
    try {
      const updateGig = await gigService.save(gig)
      dispatch({ type: 'UPDATE_GIG', gig: updateGig })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}

export function sortByGigs(sortBy) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_SORT_BY', sortBy })
    let { gigs } = getState().gigModule

    if (sortBy.sortBy === 'name')
      gigs = gigs.sort((t1, t2) => t1.name.localeCompare(t2.name))
    if (sortBy.sortBy === 'price') {
      gigs = gigs.sort((t1, t2) => t1.price - t2.price)
    }
    dispatch({ type: 'SET_GIGS', gigs })
  }
}
