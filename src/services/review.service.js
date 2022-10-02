import { httpService } from './http.service'
import { storageService } from './async-storage'
import { userService } from './user.service'
// import {
//   socketService,
//   SOCKET_EVENT_REVIEW_ADDED,
//   SOCKET_EVENT_REVIEW_ABOUT_YOU,
// } from './socket.service'
import { removeReview, addReview } from '../store/actions/review.action.js'
import { store } from '../store/store'
import { showSuccessMsg } from '../services/event-bus.service'

const reviewChannel = new BroadcastChannel('reviewChannel')

// ;(() => {
//   reviewChannel.addEventListener('message', (ev) => {
//     store.dispatch(ev.data)
//   })
//   socketService.on(SOCKET_EVENT_REVIEW_ADDED, (review) => {
//     console.log('GOT from socket', review)
//     store.dispatch(getActionAddReview(review))
//   })
//   socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (review) => {
//     showSuccessMsg(`New review about me ${review.txt}`)
//   })
// })()

export const reviewService = {
  add,
  query,
  remove,
  getById,
}

function query(filterBy) {
  var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`review${queryStr}`)
  // return storageService.query('review')
}

function getById(reviewId) {
  return httpService.get(`review/${reviewId}`)

  // console.log(gigId)
  // const res = storageService.get(STORAGE_KEY, gigId)
  // console.log(res)
  // return res
}

async function remove(reviewId) {
  await httpService.remove(`review/${reviewId}`)
  // await storageService.remove('review', reviewId)
  reviewChannel.postMessage(removeReview(reviewId))
}
async function add(review) {
  // const addedReview = await httpService.post(`review`, review)

  review.byUser = userService.getLoggedinUser()
  review.aboutUser = await userService.getById(review.aboutUserId)
  const addedReview = await storageService.post('review', review)

  reviewChannel.postMessage(addReview(addedReview))

  return addedReview
}

// This way, we can also subscribe to none-store data change
// function subscribe(listener) {
//   reviewChannel.addEventListener('message', listener)
// }
// function unsubscribe(listener) {
//   reviewChannel.removeEventListener('message', listener)
// }
