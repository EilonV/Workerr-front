import { storageService } from './async-storage'
import { utilService } from './util.service'

export const gigService = {
  query,
  save,
  remove,
  getById,
}

const STORAGE_KEY = 'gig'

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
  console.log('gigId:', gigId)

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

const gDefaultGigs = [
  {
    _id: utilService.makeId(4),
    title: 'I will extract or remove drums bass vocals creating backing track',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/28835120/original/1458651736868_facebook20160322-22751-10p13xc.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/zi9vophqo9wyccfyk4rc.png',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
  {
    _id: utilService.makeId(4),
    title: 'I will compose emotive piano music',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/43f3b6c2513ceb853d7eac50bf8a8d24-1648565984586/b83873cb-cfc6-49fa-954c-a9a3529e4b6e.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202488483/original/806fd73b7899cd827a2817bc2db0b6b8eb69c115.jpg',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
  {
    _id: utilService.makeId(4),
    title: 'I will be your edm ghost producer',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/305d3196300a0223019be29a7e641a07-1654630388255/f7d736b9-7688-4594-ae75-17a817c4ccdd.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/so_66.2342621450047,t_gig_cards_web/tuhnn5o31keeaepu9fej.png',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
  {
    _id: utilService.makeId(4),
    title: 'I will be your edm ghost producer',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a1302abc0dea1d25cc6000da16441d85-741787671631177813356/JPEG_20210909_115652_182633750985196738.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123919942/original/33e571244a54683576c40f9b9927884721fe300e.png',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
  {
    _id: utilService.makeId(4),
    title:
      'I will produce a professional quality bluegrass or country backing track',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c978e6ceb5cdf7967b16d7ef53bf0fd-1645286120435/b8e24010-2f76-4e9f-84eb-d598ff5e316b.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/46657159/original/d81004f82d847933a3e944c87f6aea1fe2a0117b.jpg',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
  {
    _id: utilService.makeId(4),
    title: 'I will compose and produce your soulful or gospel song',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ef50f8b667b89347e09ca9d692742f-1583863903962/8fd2ad2b-4016-445c-96a6-b9a3b0e156d9.jpeg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143350958/original/038fc8b05ffecf665a97016ba73c5252a4dcb1c0.jpeg',

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
        fullname: utilService.randomUserName(2),
        imgUrl: utilService.makeUserImg(),
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },

            id: utilService.makeId(4),
            txt: utilService.makeLorem(4),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: 'u102',
              fullname: 'user2',
              imgUrl: '',
              memberSince: 'march 2015',
              avgResponseTime: '1 hour',
              lastDelivery: 'about 17 hours',
              ownerLetter: utilService.makeLorem(4),
            },
          },
        ],
      },
    ],
  },
]
