<<<<<<< HEAD
import { storageService } from './async-storage'
=======
<<<<<<< HEAD
import { storageService } from './async-storage'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { store } from '../store/store'
import {
  getActionRemoveGig,
  getActionAddGig,
  getActionUpdateGig,
} from '../store/actions/gig.action'

const gDefaultGigs = [{
  _id: 'i101',
  title: 'I will design your logo',
  price: 12,
  owner: {
    _id: 'u101',
    fullname: 'Dudu Da',
    imgUrl: '',
    level: 'premium',
    rate: 4
  },
  daysToMake: 3,
  description: 'Make unique logo...',
  imgUrl: '',
  tags: [
    logo - design,
    artisitic,
    proffesional,
    accessible
  ],
  likedByUsers: ['mini-user'], // for user-wishlist : use $in
  order: [
    {
      _id: 'o1225',
      createdAt: 9898989,
      buyer: 'some buyet',
      seller: 'some user',
      gig: {
        _id: 'i101',
        name: 'Design Logo',
        price: 20
      },
      status: 'pending'
    }
  ],
  user: [
    {
      _id: 'u101',
      fullname: 'User 1',
      imgUrl: '',
      username: 'user1',
      password: 'secret',
      level: 'basic',
      reviews: [
        {
          id: 1234,
          txt: 'Very kind and works fast',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: ''
          }
        }
      ],
    },
  ]
}
]

// This file demonstrates how to use a BroadcastChannel to notify other browser tabs

const STORAGE_KEY = 'gig'
const gigChannel = new BroadcastChannel('gigChannel')

  ; (() => {
    gigChannel.addEventListener('message', (ev) => {
      store.dispatch(ev.data)
    })
  })()
=======
import { type } from '@testing-library/user-event/dist/type/index.js'
import { httpService } from './http.service.js'
>>>>>>> 6d6a57d8efb381c6f1e6c43a1f046c5f43562283
>>>>>>> bfe7dfae4557786bfbe7278862947f51c76c343b

export const gigService = {
  query,
  save,
  remove,
  getById,
}

const STORAGE_KEY = 'gigs'
const gDefaultGigs = [{
  _id: 'i101',
  title: 'I will design your logo',
  price: 12,
  owner: {
    _id: 'u101',
    fullname: 'Dudu Da',
    imgUrl: '',
    level: 'premium',
    rate: 4
  },
  daysToMake: 3,
  description: 'Make unique logo...',
  imgUrl: '',
  tags: [
    logo - design,
    artisitic,
    proffesional,
    accessible
  ],
  likedByUsers: ['mini-user'], // for user-wishlist : use $in
  order: [
    {
      _id: 'o1225',
      createdAt: 9898989,
      buyer: 'some buyet',
      seller: 'some user',
      gig: {
        _id: 'i101',
        name: 'Design Logo',
        price: 20
      },
      status: 'pending'
    }
  ],
  user: [
    {
      _id: 'u101',
      fullname: 'User 1',
      imgUrl: '',
      username: 'user1',
      password: 'secret',
      level: 'basic',
      reviews: [
        {
          id: 1234,
          txt: 'Very kind and works fast',
          rate: 4,
          by: {
            _id: 'u102',
            fullname: 'user2',
            imgUrl: ''
          }
        }
      ],
    },
  ]
}
]

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
