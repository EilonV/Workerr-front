import { storageService } from './async-storage'

export const gigService = {
  query,
  save,
  remove,
  getById,
}

const STORAGE_KEY = 'gigs'
const gDefaultGigs = []

function query() {
  return storageService.query(STORAGE_KEY).then((gigs) => {
    if (!gigs || !gigs.length) {
      storageService.postMany(STORAGE_KEY, gDefaultGigs)
      gigs = gDefaultGigs
    }
    // if (filterBy) {
    //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    //     maxBatteryStatus = maxBatteryStatus || Infinity
    //     minBatteryStatus = minBatteryStatus || 0
    //     gigs = gigs.filter(gig => gig.type.toLowerCase().includes(type.toLowerCase()) && gig.model.toLowerCase().includes(model.toLowerCase())
    //         && (gig.batteryStatus < maxBatteryStatus)
    //         && gig.batteryStatus > minBatteryStatus)
    // }

    return gigs
  })
}

function getById(gigId) {
  return storageService.get(STORAGE_KEY, gigId)
}

function remove(gigId) {
  return storageService.remove(STORAGE_KEY, gigId)
}

function save(gig) {
  if (gig._id) {
    return storageService.put(STORAGE_KEY, gig)
  } else {
    gig.batteryStatus = 100
    return storageService.post(STORAGE_KEY, gig)
  }
}
