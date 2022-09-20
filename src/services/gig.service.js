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
  console.log(gigId);
  const res = storageService.get(STORAGE_KEY, gigId)
  console.log(res);
  return res
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
    gigInclusive: ['Commercial Use', 'Color', 'Source File','High Resolution'],
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: utilService.makeId(4),
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/28835120/original/1458651736868_facebook20160322-22751-10p13xc.jpg',
      level: utilService.makeLevel(1),
      rate: utilService.getRandomIntInclusive(0, 4),
      memberSince: 'march 2017',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter: `I have worked for about 8 full years mixing audio in live performances. I have been working as a dj for 15 years. I produce my or others' music (home studio) for about 16 years. `,
    },
    daysToMake: utilService.getRandomIntInclusive(1, 10),
    description: utilService.makeLorem(3),
    longerDescription:
      'Using a perfect combination of melody, harmony, and rhythm, I will compose harmonious piano music that allows ones emotions to be changed.Songs can be used in films, podcasts, ads, or music streaming platforms.If you have any feelings that you wish to be portrayed in the music, let me know, and feel free to send me links to songs that you like, or similar styles that you would like me to compose in. Note: Fees may vary depending on the complexity of the genre. Songs are unique, copyright free and will belong exclusively to the buyer once the order is completed. I can create multiple songs for the time requested.    I can provide the midi for the song at no extra cost. Please request before placing the order.     Please contact me before placing your order if you require 10 minutes of music or more, so that I can create a custom offer with the discounted amount taken off. ',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/zi9vophqo9wyccfyk4rc.png',

    tags: ['Music', 'artisitic', 'proffesional', 'accessible'],
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
        _id: utilService.makeId(4),
        fullname: utilService.randomUserName(2),
        imgUrl:
          'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0f37300e1e09cba08685e3c85a4ceb3f-1661447564773/305c8f97-9a87-449a-908a-20275c9ab8d4.jpg',
        username: 'user1',
        password: 'secret',
        level: utilService.makeLevel(1),
        reviews: [
          {
            id: utilService.makeId(4),
            txt: utilService.makeLorem(16),
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: utilService.makeId(4),
              fullname: 'jeffgordon123',
              imgUrl:
                'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
              memberSince: 'may 2012',
              avgResponseTime: '2 hours',
              lastDelivery: 'about 14 hours',
              ownerLetter: `Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.`,
            },

            id: utilService.makeId(4),
            txt: `He was responsive and did a great job of helping me with an instrumental track. And great price to boot. Thank you!`,
            rate: utilService.getRandomIntInclusive(0, 4),
            by: {
              _id: utilService.makeId(4),
              fullname: 'user2',
              imgUrl:
                'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0f37300e1e09cba08685e3c85a4ceb3f-1661447564773/305c8f97-9a87-449a-908a-20275c9ab8d4.jpg',
              memberSince: 'may 2019',
              avgResponseTime: '5 hours',
              lastDelivery: 'about 14 hours',
              ownerLetter: utilService.makeLorem(20),
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
  {
    _id: utilService.makeId(4),
    title: 'I will be your music producer, ghost producer',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2cd412f99ba7ef9ac7fc240b5cd6ba85-1652964540466/368bab27-3539-4300-b3b0-21c2de8d68fd.png',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/256418126/original/06f1d1a420c266a3f923c52b0c0323a0f48e914d.jpg',

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
    title: 'I will produce an original instrumental for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/da836c2ded02772f376d9b66d03e8d7c-1657247143616/6393bd7f-d699-4267-bf12-f090f4c30cfa.JPG',
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
      'https://fiverr-res.cloudinary.com/videos/so_16.461057,t_main1,q_auto,f_auto/bobsafkbwfyvzkcrshtx/produce-instrumental-for-you-in-any-genre.png',

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
    title: 'I will make deep chill and sensual house music for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2665acfd18b37fec8eba19a101693d4f-1652450077325/aa60bc86-aab4-4544-8600-3e0ac6514480.jpeg',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/209535406/original/406b6a668c80b38dbc961b89262941a111824e51.png',
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
    title: 'I will be your pop music producer',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/94efe973ed3de694df45ab8a5f4a942a-1651544812806/3d1e4073-3fcb-460e-8e58-5e89ed58b142.PNG',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247071165/original/9553d1ba4b8456b613e7de3ac35e21b61839fbe1.png',

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
    title: 'I will produce the best piano instrumental cover track of any song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3c627d42b221ef7b26f0711acee63d76-1567524466203/0ded3f3b-776e-4be9-82b0-6c2cfd6f15ba.jpg',
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
      'https://fiverr-res.cloudinary.com/video/upload/so_0.58378,t_gig_cards_web/ijxnutocxnyakosbpb8o.png',

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
    title: 'I will compose the perfect soundtrack for your project',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/716c01a806133a1bfffd1f1193daa0bd-1652460041127/e1f9a72a-3ef7-4205-baea-1a4b4046e41a.jpeg',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241489346/original/de1f8bf2cbf64b9dc0f45ee826f3034bcf9a147a.png',
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
    title: 'I will record an original song based on your lyrics or idea',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e2f8c614dd6b0ff6996ff152af289f11-1612829303547/e3edd16f-9df8-4076-8fec-6633f3aac5e2.jpg',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/197122247/original/fc8c2475847dfbd6f11a296f400f8c494055eae5.jpg',
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
    title: 'I will arrange or produce your pop song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b736b5cb97fdd57a6a4ec84a4f845822-1637420484034/cb3bece6-ba29-431b-8dd5-7bfb37a52006.jpeg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/qgwbc0j5uydwwcgbmig1/arrange-or-produce-your-song.png',
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
    title: 'I will make a zyzz style hardstyle remix for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/272bec4e4660e51a32f9754a0ce8711b-1654862829042/09c1371b-2c09-473f-852f-cb851170808f.jpg',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271220899/original/25e87c57227ff78333f002d859903dcef8cf9554.jpg',
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
    title: 'I will compose cinematic music for your film or video game',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/83d548d34a9d613af113bbc256a96654-904086651610577664240/JPEG_20210114_004102_4999370057923863450.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/so_74.030129,t_main1,q_auto,f_auto/nrjbeta35icfna8pynrz/create-orchestral-music-epic-orchestra-trailer-film-score.png',
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
    title: 'I will be your music producer, ghost production',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c1d1f417dd92689583984a82e33cac63-962205441656529607.008354/8B5E0CC4-CCAC-4679-913A-AA983A2F1F08',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/184721743/original/da73f48358910208d3ce16196b44696f24a01f53.png',
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
    title: 'I will do a full service song production',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a3cbe06996064809064b6a2c912cd77c-1648481440857/facd6169-b858-4f8f-95d9-524247783006.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/bnebzwaherc8nh8kkufp/produce-and-arrange-your-song.png',
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
    title: 'I will add an orchestra or chamber strings to your song or project',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/46b53eee69982adaecf4025b85df127e-1650445322298/aa794d6d-7db7-49c8-b002-03b84696d2fa.png',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/215625652/original/00d1b8ea3d0f4a6759477a6afb0009f31997787d.jpeg',
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
    title: 'I will be your music producer, ghost producer, remix or original',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e16b42fef1dd151ca7430b9b3486a13c-1658580730840/6dbb0033-8b1b-4206-99b3-48677b5aacaf.jpg',
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
      'https://fiverr-res.cloudinary.com/video/upload/so_6.717682,t_gig_cards_web/ikmbym6fvpzmzjkop2rs.png',
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
          gigInclusive: ['Commercial Use', 'Color', 'Source File','High Resolution']
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
      'I will create orchestral soundtrack for game or film, epic cinematic music or trailer',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9a2be59835a2d9a91af023b2074c6f78-1572104740353/65a840ed-8109-48ee-b45f-c6b07482b846.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/so_62.664502,t_main1,q_auto,f_auto/syjkev459eze3ubmonjs/compose-a-professional-soundtrack-for-you-score-or-vsti.png',
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
      'I will ghost produce a professional edm song for best record labels',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d8a83e04727a96891bd3efeaf6167dc3-1659355298663/8e063b6a-c96e-4dbb-a111-57c347d1340b.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/tdrfy3wra7shrz4z2q0h/ghost-produce-a-high-quality-edm-track-for-djs.png',
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
    title: 'I will compose cinematic epic orchestral music',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/aaac85434bed5f2ace0e731b4d116440-1647513033255/74fc2137-73dd-4086-9933-a9708fd11665.png',
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
      'https://fiverr-res.cloudinary.com/videos/so_0.0,t_main1,q_auto,f_auto/tfbsa6nf1cwzojwpamdb/create-cinematic-trailer-or-epic-music-for-your-projects.png',
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
    title: 'I will do full music production of your song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b35d99529052a133d6e93e8c22e1e9a3-635687601663244351727/JPEG_20220915_091910_5281127426319624923.jpg',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132558750/original/d075b2c0d807c9c7039429d24fb8012d20394251.png',
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
          gigInclusive: ['Commercial Use', 'Color', 'Source File','High Resolution']
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
    title: 'I will be your platinum record music producer',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/75b8fd36e6edec3544edc6628893daa2-1602764817345/ef090646-57ef-4b09-9142-57397f598e66.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/so_17.268086,t_main1,q_auto,f_auto/dsrgdqugw88ujrvso5mt/produce-your-pop-track-or-cover.png',
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
    title: 'I will produce your latin song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/84bda992e7672093cbe05d83bdf7d24f-1657797625664/7823c36d-b90b-43d1-b443-f69e1ef56166.jpg',
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
      'https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/wzxpaqjjucltryekgrdb.png',
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
    title: 'I will be your pro composer for rock, metal song or cover music',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/38536617/original/SOLITARYLOGOITUNES.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/so_33.748866,t_main1,q_auto,f_auto/i4gsxs2r0rw051dokhgn/write-a-metal-or-rock-song-for-you.png',
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
    title: 'I will be your ghost producer',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9a7c1d9f234296264d360d31bbe94a48-1648490138496/68d7f94d-1652-4212-9701-7bd0fd8b3a57.JPG',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/101678310/original/62f9387aee7b57215f8047e3b62c87870b5da88b.jpg',
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
    title: 'I will create relaxing , emotional piano music for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a585f716883aa1e4472afbe27b799cec-1654249286963/05aef735-2537-4fb7-a67b-da1db21091fd.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/syuyf0ptkiytt82d8otj/create-relaxing-emotional-piano-music-for-you.png',
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
    title: 'I will produce anime or japanese song style for you',
    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b58cac21dc9c4fd715044dfb9faddbd9-1648997995405/c04a3503-fa2c-453b-900c-a36d2fc9d8cd.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/ll2kbljooylmogsuv4ua/produce-anime-song-for-you.png',
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
    title: 'I will be your music producer, ghost production',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/82ea7ddaa0cc7f171ff5a871e9bb5bec-1648920053416/0881ef1c-5734-4b68-bfd9-3aadaf5e4a9e.jpg',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/138364513/original/f3a92aac76ed783e1cf74d00b2c4550267de0e42.jpg',
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
      'I will produce a rock or metal song with jpop japan anime ost style',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a65a53a5dd379142afbdfade9895094-1587109477485/bb7d6774-a5a7-4c04-afd9-72a09fa0acb3.jpg',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/235091809/original/661afeec5dba47fbe267fc596b290eddcca39a77.jpg',
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
    title: 'I will make hard rock, classic rock song for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/01eefd2d0b7189e11c385fa791a10524-1648540760133/6f46b2e2-dc42-4527-9884-38025a151512.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/j2n3tmrfy2u9aqwvlq9c/make-hard-rock-classic-rock-song-for-you.png',
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
    title: 'I will be your music producer edm ghost production',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/224c9641cec8b14454a250616ff70b1b-1653065010831/269f2796-0027-44ff-9405-591a1b45ff79.png',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248678351/original/c20c631c8701b2ae44338b081239e1a86c269cca.png',
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
    title: 'I will record cover or backing track for any song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/df5e1ef93fea1e1156c20776ac0a6c8d-1648862879899/1c67629c-2fef-491d-8752-100a405c2386.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/cobhsu2fctlnhc5pujnw/record-cover-or-backing-track-for-any-song.png',
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
    title: 'I will create a jazz piano music',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7690847e10a8ec218a561560c3294501-1644398984242/5b1c1cd7-6da0-4075-a60d-11887a517d5b.JPG',
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
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200560716/original/607a3ffa6245afe35daed0599fd21a2cf5d4aaab.jpg',
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
    title: 'I will create an original song for you',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/fce81510ef6bedbc1940d1d23a92fc32-751371611599378768074/JPEG_20200906_045242_2382704333050961583.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/mlq5vopjvbnplu8dv0tu/produce-a-full-song-for-you.png',
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
    title: 'I will produce, mix and master your song',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2c2d55fad78269a8d509d93a331eddf5-1656792035472/d3e5d40e-1883-4099-8dd3-f775ec47356d.jpeg',
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
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/171395377/original/891cbf02ac8a6d6b845c8f69ecee504b1fe56630/produce-mix-and-master-your-song.jpg',
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
    title: 'I will write and produce fun childrens music and kids songs',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c0058681cb8dd5803943b8f59380f718-1648747173496/80feaf39-d799-4db3-839f-bec087687838.jpg',
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
      'https://fiverr-res.cloudinary.com/videos/so_5.346422,t_main1,q_auto,f_auto/ih51gpio6px7ub1opv88/be-your-edm-ghost-producer.png',
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
          gigInclusive: ['Commercial Use', 'Color', 'Source File','High Resolution']
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
    title: 'I will write and produce fun childrens music and kids songs',

    price: utilService.getRandomIntInclusive(1, 1000),
    owner: {
      _id: 'u101',
      fullname: utilService.randomUserName(2),
      ownerCountry: utilService.makeCountry(1),
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4a43f7f1582964ce3d7c15ab28697580-1644008533718/26029836-d99a-41e8-bc9a-2c9e9578047b.jpg',
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
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/242934288/original/3aa4c6e71522a04b62fb9208c40f9ddd1fc301a6.png',
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
