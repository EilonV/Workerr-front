import { storageService } from './async-storage'
import { utilService } from './util.service'

export const gigService = {
  query,
  save,
  remove,
  getById,
}

const STORAGE_KEY = 'gig'

const gDefaultGigs = [
  {
    _id: 'i100',
    title: 'I will design your logo',
    price: 12,
    owner: {
      _id: 'u101',
      fullname: 'Dudu Da',
      ownerCountry: 'USA',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/112136097/original/e67e2292eb9e7d5b51939707f6fbe71f12812f26.jpg',
      level: 'premium',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        ' Hi, Mayur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: 3,
    description: '',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl: '',

    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
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
          price: 20,
        },
        status: 'pending',
      },
    ],
    user: [
      {
        _id: 'u101',
        fullname: 'User 1',
        imgUrl:
          'https://www.google.com/search?q=logo+design&rlz=1C1SQJL_iwIL805IL805&sxsrf=ALiCzsY42ec3l797O-b1-EMVU5lpmPg-Mg:1663266350169&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjwyN__tZf6AhXMN8AKHePSCEYQ_AUoAXoECAIQAw&biw=1903&bih=900&dpr=1#imgrc=5cYaiEp_sBQEJM',
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
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter:
                ' Hi, Mayur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
            },
          },
        ],
      },
    ],
  },
  {
    _id: 'i102',
    title: 'I wont design your logo',
    price: 12,

    owner: {
      _id: 'u101',
      fullname: 'Dudu Da',
      imgUrl:
        'https://media.smallbiztrends.com/2021/11/how-to-make-money-on-fiverr.png',
      level: 'premium',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        ' Hi, Mayur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },

    daysToMake: 3,
    description: '',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl: '',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'], // for user-wishlist : use $in

    order: [
      {
        _id: 'o1225',
        createdAt: 9898989,
        buyer: 'some buyer',
        seller: 'some user',
        gig: {
          _id: 'i101',
          name: 'Design Logo',
          price: 20,
        },
        status: 'pending',
      },
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
              imgUrl: '',
            },
          },
        ],
      },
    ],
  },
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
    gig._id = utilService.makeId(4)
    return storageService.post(STORAGE_KEY, gig)
  }
}
