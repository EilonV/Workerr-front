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

export const gigService = {
  query,
  getById,
  remove,
  save,
}

const BASE_URL = `gig/`

const gDefaultGigs = [
  {
    _id: i101,
    title: 'I will design your logo',
    price: 12,
    owner: {
      _id: u101,
      fullname: 'Dudu Da',
      imgUrl: url,
      level: basic / premium,
      rate: 4,
    },
    daysToMake: 3,
    description: 'Make unique logo...',
    imgUrl: '',
    tags: [logo - design, artisitic, proffesional, accessible],
    likedByUsers: ['mini-user'], // for user-wishlist : use $in
    order: [
      {
        _id: 'o1225',
        createdAt: 9898989,
        buyer: mini - user,
        seller: mini - user,
        gig: {
          _id: i101,
          name: 'Design Logo',
          price: 20,
        },
        status: pending,
      },
    ],
    user: [
      {
        _id: u101,
        fullname: 'User 1',
        imgUrl: url,
        username: 'user1',
        password: 'secret',
        level: basic / premium,
        reviews: [
          {
            id: madeId,
            txt: 'Very kind and works fast',
            rate: 4,
            by: {
              _id: u102,
              fullname: user2,
              // imgUrl: /img/img2.jpg
            },
          },
        ],
      },
    ],
  },
]

async function query(filterBy = {}) {
  const gigs = await httpService.get(BASE_URL, { params: filterBy })
  return gigs
}
async function getById(gigId) {
  const gig = await httpService.get(BASE_URL + gigId)
  return gig
}
async function remove(gigId) {
  const gig = await httpService.delete(BASE_URL + gigId)
  return gig
}

async function save(gig) {
  if (gig._id) {
    const res = await httpService.put(BASE_URL + gig._id, gig)
    return res
  } else {
    const res = await httpService.post(BASE_URL, gig)
    return res
  }
}
