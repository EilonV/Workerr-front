import { storageService } from './async-storage'
import { utilService } from './util.service'

export const gigService = {
  query,
  save,
  remove,
  getById,
}

const STORAGE_KEY = 'gig'

function query(filterBy) {
  return storageService.query(STORAGE_KEY).then((gigs) => {
    if (!gigs || !gigs.length) {
      storageService.postMany(STORAGE_KEY, gDefaultGigs)
      gigs = gDefaultGigs
    }
    // if (filterBy) {
    //   var { title } = filterBy
    //   gigs = gigs.filter((gig) =>
    //     gig.title.toLowerCase().includes(title.toLowerCase())
    //   )
    // }
    if (filterBy) {
      const { title, minPrice } = filterBy
      if (title) {
        const regex = new RegExp(title, 'i')
        gigs = gigs.filter((gig) => regex.test(gig.title))
      }
      return gigs
    }
  })
}

function getById(gigId) {
  console.log(gigId)
  const res = storageService.get(STORAGE_KEY, gigId)
  console.log(res)
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
    _id: 'XvgR',
    title: 'I will extract or remove drums bass vocals creating backing track',
    gigInclusive: ['Commercial Use', 'Color', 'Source File', 'High Resolution'],
    price: 716,
    owner: {
      _id: 'R0v3',
      fullname: 'David Amy ',
      ownerCountry: 'Brazil ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/28835120/original/1458651736868_facebook20160322-22751-10p13xc.jpg',
      level: 'Basic ',
      rate: 1,
      memberSince: 'march 2017',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        "I have worked for about 8 full years mixing audio in live performances. I have been working as a dj for 15 years. I produce my or others' music (home studio) for about 16 years. ",
      username: 'user',
    },
    daysToMake: 9,
    description: 'the color of television was . ',
    longerDescription:
      'Using a perfect combination of melody, harmony, and rhythm, I will compose harmonious piano music that allows ones emotions to be changed.Songs can be used in films, podcasts, ads, or music streaming platforms.If you have any feelings that you wish to be portrayed in the music, let me know, and feel free to send me links to songs that you like, or similar styles that you would like me to compose in. Note: Fees may vary depending on the complexity of the genre. Songs are unique, copyright free and will belong exclusively to the buyer once the order is completed. I can create multiple songs for the time requested.    I can provide the midi for the song at no extra cost. Please request before placing the order.     Please contact me before placing your order if you require 10 minutes of music or more, so that I can create a custom offer with the discounted amount taken off. ',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/zi9vophqo9wyccfyk4rc.png',
    tags: [
      'pencil drawing',
      'realistic drawing',
      'hand drawing',
      'portrait drawing',
      'pencil sketch',
    ],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'z6y1',
        txt: 'tuned as generally was The sky to tuned burn was It I the port to All a dead channel the port . ',
        rate: 2,
        by: {
          _id: '8G8G',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '8948',
    title: 'I will compose emotive piano music',
    price: 919,
    owner: {
      _id: 'u101',
      fullname: 'Steven Joshua ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/43f3b6c2513ceb853d7eac50bf8a8d24-1648565984586/b83873cb-cfc6-49fa-954c-a9a3529e4b6e.jpg',
      level: 'Premium ',
      rate: 3,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 6,
    description: '. it . ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202488483/original/806fd73b7899cd827a2817bc2db0b6b8eb69c115.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'eHW0',
        txt: 'it each time the color of television tuned I above was tuned bit by bit the color of television from various people to burn was the color of television the port ',
        rate: 3,
        by: {
          _id: 'Hbdj',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'nR29',
    title: 'I will be your edm ghost producer',
    price: 761,
    owner: {
      _id: 'u101',
      fullname: 'Anthony Lauren ',
      ownerCountry: 'Tha ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/305d3196300a0223019be29a7e641a07-1654630388255/f7d736b9-7688-4594-ae75-17a817c4ccdd.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 10,
    description: 'a pleasure in such cases as generally ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/so_66.2342621450047,t_gig_cards_web/tuhnn5o31keeaepu9fej.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '3X3x',
        txt: 'to in such cases The sky . was The sky it it the story the story had from various people had each time was the color of television ',
        rate: 3,
        by: {
          _id: '5i2W',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'nWhh',
    title: 'I will be your edm ghost producer',
    price: 536,
    owner: {
      _id: 'u101',
      fullname: 'Richard Jeremy ',
      ownerCountry: 'Ukraine ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a1302abc0dea1d25cc6000da16441d85-741787671631177813356/JPEG_20210909_115652_182633750985196738.jpg',
      level: 'Premium ',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: '. above a dead channel ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123919942/original/33e571244a54683576c40f9b9927884721fe300e.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'Kbj1',
        txt: 'burn had the story to each time . was above a different story in such cases the story in such cases burn All to the port ',
        rate: 3,
        by: {
          _id: 'r3v2',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '7s6n',
    title:
      'I will produce a professional quality bluegrass or country backing track',
    price: 926,
    owner: {
      _id: 'u101',
      fullname: 'Michelle Megan ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c978e6ceb5cdf7967b16d7ef53bf0fd-1645286120435/b8e24010-2f76-4e9f-84eb-d598ff5e316b.jpg',
      level: 'Premium ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'it . the port ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/46657159/original/d81004f82d847933a3e944c87f6aea1fe2a0117b.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'n0vy',
        txt: 'All it to . a dead channel was was was was above had from various people in such cases a dead channel . this happened ',
        rate: 2,
        by: {
          _id: '534N',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '2y3i',
    title: 'I will compose and produce your soulful or gospel song',
    price: 451,
    owner: {
      _id: 'u101',
      fullname: 'Joshua Jacob ',
      ownerCountry: 'Pol ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ef50f8b667b89347e09ca9d692742f-1583863903962/8fd2ad2b-4016-445c-96a6-b9a3b0e156d9.jpeg',
      level: 'Premium ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 6,
    description: '. The sky as generally ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143350958/original/038fc8b05ffecf665a97016ba73c5252a4dcb1c0.jpeg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'ti0C',
        txt: 'a different story it and It each time was burn from various people was as generally and It The sky more or less the color of television as generally ',
        rate: 0,
        by: {
          _id: 'p526',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '64z9',
    title: 'I will be your music producer, ghost producer',
    price: 339,
    owner: {
      _id: 'u101',
      fullname: 'Danielle Jason ',
      ownerCountry: 'Tha ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2cd412f99ba7ef9ac7fc240b5cd6ba85-1652964540466/368bab27-3539-4300-b3b0-21c2de8d68fd.png',
      level: 'Gold ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: '. a pleasure All ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/256418126/original/06f1d1a420c266a3f923c52b0c0323a0f48e914d.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'bjN9',
        txt: 'had a dead channel was tuned All the color of television the color of television this happened a pleasure the story to above the port happens burn the port ',
        rate: 2,
        by: {
          _id: 'jr6t',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'n5y9',
    title: 'I will produce an original instrumental for you',
    price: 926,
    owner: {
      _id: 'u101',
      fullname: 'Joseph Amanda ',
      ownerCountry: 'belgium ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/da836c2ded02772f376d9b66d03e8d7c-1657247143616/6393bd7f-d699-4267-bf12-f090f4c30cfa.JPG',
      level: 'Basic ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'each time It . ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_16.461057,t_main1,q_auto,f_auto/bobsafkbwfyvzkcrshtx/produce-instrumental-for-you-in-any-genre.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'H98b',
        txt: 'All the port The sky a dead channel . tuned was tuned a pleasure from various people each time and and each time this happened above ',
        rate: 0,
        by: {
          _id: 'L9GH',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'X29j',
    title: 'I will make deep chill and sensual house music for you',
    price: 407,
    owner: {
      _id: 'u101',
      fullname: 'Rebecca Robert ',
      ownerCountry: 'Ukraine ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2665acfd18b37fec8eba19a101693d4f-1652450077325/aa60bc86-aab4-4544-8600-3e0ac6514480.jpeg',
      level: 'Basic ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'more or less a pleasure above ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/209535406/original/406b6a668c80b38dbc961b89262941a111824e51.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'bbCd',
        txt: 'the color of television a dead channel above in such cases each time as generally the color of television . was The sky burn . burn a dead channel the story bit by bit ',
        rate: 3,
        by: {
          _id: 'xpj5',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'uM0X',
    title: 'I will be your pop music producer',
    price: 881,
    owner: {
      _id: 'u101',
      fullname: 'Justin Rebecca ',
      ownerCountry: 'France ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/94efe973ed3de694df45ab8a5f4a942a-1651544812806/3d1e4073-3fcb-460e-8e58-5e89ed58b142.PNG',
      level: 'Basic ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 7,
    description: 'had bit by bit a different story ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247071165/original/9553d1ba4b8456b613e7de3ac35e21b61839fbe1.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '2ntn',
        txt: 'It from various people tuned to the port each time a dead channel happens was to tuned bit by bit to a dead channel it had ',
        rate: 3,
        by: {
          _id: 'bhzH',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'vLvM',
    title: 'I will produce the best piano instrumental cover track of any song',
    price: 939,
    owner: {
      _id: 'u101',
      fullname: 'Nicole Thomas ',
      ownerCountry: 'belgium ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3c627d42b221ef7b26f0711acee63d76-1567524466203/0ded3f3b-776e-4be9-82b0-6c2cfd6f15ba.jpg',
      level: 'Premium ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 5,
    description: 'from various people from various people as generally ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/so_0.58378,t_gig_cards_web/ijxnutocxnyakosbpb8o.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'duX9',
        txt: 'was above was the port it above the story a pleasure a different story . was it and . a dead channel to ',
        rate: 2,
        by: {
          _id: '1sGY',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'Ng9y',
    title: 'I will compose the perfect soundtrack for your project',
    price: 40,
    owner: {
      _id: 'u101',
      fullname: 'Rebecca Kevin ',
      ownerCountry: 'Usa ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/716c01a806133a1bfffd1f1193daa0bd-1652460041127/e1f9a72a-3ef7-4205-baea-1a4b4046e41a.jpeg',
      level: 'Basic ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 5,
    description: 'to to the color of television ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241489346/original/de1f8bf2cbf64b9dc0f45ee826f3034bcf9a147a.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '8xz2',
        txt: 'more or less in such cases . tuned . to was a different story from various people tuned above to . the port . to ',
        rate: 3,
        by: {
          _id: 'hR70',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'C4vX',
    title: 'I will record an original song based on your lyrics or idea',
    price: 899,
    owner: {
      _id: 'u101',
      fullname: 'Brittany Michelle ',
      ownerCountry: 'Algir ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e2f8c614dd6b0ff6996ff152af289f11-1612829303547/e3edd16f-9df8-4076-8fec-6633f3aac5e2.jpg',
      level: 'Gold ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 2,
    description: 'The sky burn in such cases ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/197122247/original/fc8c2475847dfbd6f11a296f400f8c494055eae5.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '1rWr',
        txt: '. I . was . to happens had it and . bit by bit the color of television to from various people tuned ',
        rate: 2,
        by: {
          _id: 't64R',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'p6hu',
    title: 'I will arrange or produce your pop song',
    price: 825,
    owner: {
      _id: 'u101',
      fullname: 'Rachel Kyle ',
      ownerCountry: 'Brazil ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b736b5cb97fdd57a6a4ec84a4f845822-1637420484034/cb3bece6-ba29-431b-8dd5-7bfb37a52006.jpeg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 6,
    description: 'more or less bit by bit and ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/qgwbc0j5uydwwcgbmig1/arrange-or-produce-your-song.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'hjWy',
        txt: 'It I burn . bit by bit tuned had was to a dead channel All to tuned each time had the color of television ',
        rate: 0,
        by: {
          _id: 'G0Kv',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '94uv',
    title: 'I will make a zyzz style hardstyle remix for you',
    price: 409,
    owner: {
      _id: 'u101',
      fullname: 'Steven Kyle ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/272bec4e4660e51a32f9754a0ce8711b-1654862829042/09c1371b-2c09-473f-852f-cb851170808f.jpg',
      level: 'Premium ',
      rate: 3,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'to . the color of television ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271220899/original/25e87c57227ff78333f002d859903dcef8cf9554.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'LWGC',
        txt: 'each time bit by bit a pleasure . from various people to a dead channel the port had All happens more or less each time a different story happens each time ',
        rate: 2,
        by: {
          _id: 'HnRs',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'HsnC',
    title: 'I will compose cinematic music for your film or video game',
    price: 742,
    owner: {
      _id: 'u101',
      fullname: 'Stephanie Lauren ',
      ownerCountry: 'Ukraine ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/83d548d34a9d613af113bbc256a96654-904086651610577664240/JPEG_20210114_004102_4999370057923863450.jpg',
      level: 'Basic ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'a pleasure more or less a pleasure ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_74.030129,t_main1,q_auto,f_auto/nrjbeta35icfna8pynrz/create-orchestral-music-epic-orchestra-trailer-film-score.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'nWbh',
        txt: 'was All more or less as generally in such cases it above to a pleasure from various people burn the port to The sky this happened was ',
        rate: 0,
        by: {
          _id: 'L3nd',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'MGY0',
    title: 'I will be your music producer, ghost production',
    price: 28,
    owner: {
      _id: 'u101',
      fullname: 'Jeremy Justin ',
      ownerCountry: 'Ukraine ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c1d1f417dd92689583984a82e33cac63-962205441656529607.008354/8B5E0CC4-CCAC-4679-913A-AA983A2F1F08',
      level: 'Gold ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 6,
    description: 'a different story All in such cases ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/184721743/original/da73f48358910208d3ce16196b44696f24a01f53.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'b7Rn',
        txt: 'happens to from various people above more or less . All All the port bit by bit was burn the story this happened . the story ',
        rate: 3,
        by: {
          _id: '2R63',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'KvHR',
    title: 'I will do a full service song production',
    price: 107,
    owner: {
      _id: 'u101',
      fullname: 'Andrew Emily ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a3cbe06996064809064b6a2c912cd77c-1648481440857/facd6169-b858-4f8f-95d9-524247783006.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'happens All above ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/bnebzwaherc8nh8kkufp/produce-and-arrange-your-song.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'jHRr',
        txt: 'from various people from various people was . was from various people . burn the port I the story a different story this happened the port a dead channel in such cases ',
        rate: 4,
        by: {
          _id: 'in4x',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'ni2z',
    title: 'I will add an orchestra or chamber strings to your song or project',
    price: 864,
    owner: {
      _id: 'u101',
      fullname: 'John Melissa ',
      ownerCountry: 'Algir ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/46b53eee69982adaecf4025b85df127e-1650445322298/aa794d6d-7db7-49c8-b002-03b84696d2fa.png',
      level: 'Premium ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'and in such cases the color of television ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/215625652/original/00d1b8ea3d0f4a6759477a6afb0009f31997787d.jpeg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '1xMN',
        txt: 'to a pleasure a dead channel and tuned to It and happens . . a dead channel the story was from various people was ',
        rate: 0,
        by: {
          _id: 'Wsn3',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'GMtd',
    title: 'I will be your music producer, ghost producer, remix or original',
    price: 674,
    owner: {
      _id: 'u101',
      fullname: 'Thomas Jonathan ',
      ownerCountry: 'UK ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e16b42fef1dd151ca7430b9b3486a13c-1658580730840/6dbb0033-8b1b-4206-99b3-48677b5aacaf.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 2,
    description: 'was more or less . ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/so_6.717682,t_gig_cards_web/ikmbym6fvpzmzjkop2rs.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'KReb',
        txt: 'more or less as generally The sky happens I a pleasure happens a different story a pleasure I I . burn the color of television a pleasure each time ',
        rate: 2,
        by: {
          _id: 'Yj1b',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'Xzrv',
    title:
      'I will create orchestral soundtrack for game or film, epic cinematic music or trailer',
    price: 36,
    owner: {
      _id: 'u101',
      fullname: 'Emily David ',
      ownerCountry: 'UK ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9a2be59835a2d9a91af023b2074c6f78-1572104740353/65a840ed-8109-48ee-b45f-c6b07482b846.jpg',
      level: 'Gold ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 5,
    description: '. . a different story ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_62.664502,t_main1,q_auto,f_auto/syjkev459eze3ubmonjs/compose-a-professional-soundtrack-for-you-score-or-vsti.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'zpWG',
        txt: 'I was each time burn in such cases the color of television the story . I each time each time and to the color of television a different story had ',
        rate: 0,
        by: {
          _id: '203z',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'n6C4',
    title:
      'I will ghost produce a professional edm song for best record labels',
    price: 122,
    owner: {
      _id: 'u101',
      fullname: 'Aaron Sarah ',
      ownerCountry: 'UK ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d8a83e04727a96891bd3efeaf6167dc3-1659355298663/8e063b6a-c96e-4dbb-a111-57c347d1340b.jpg',
      level: 'Premium ',
      rate: 3,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 9,
    description: 'happens the port happens ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/tdrfy3wra7shrz4z2q0h/ghost-produce-a-high-quality-edm-track-for-djs.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'p74v',
        txt: 'I The sky a pleasure to above had All as generally above It the port and was I the port the story ',
        rate: 2,
        by: {
          _id: 'i6br',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'H5r0',
    title: 'I will compose cinematic epic orchestral music',
    price: 924,
    owner: {
      _id: 'u101',
      fullname: 'Amber Sarah ',
      ownerCountry: 'Tha ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/aaac85434bed5f2ace0e731b4d116440-1647513033255/74fc2137-73dd-4086-9933-a9708fd11665.png',
      level: 'Gold ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 5,
    description: 'a different story tuned . ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_0.0,t_main1,q_auto,f_auto/tfbsa6nf1cwzojwpamdb/create-cinematic-trailer-or-epic-music-for-your-projects.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'sbbp',
        txt: 'The sky this happened tuned burn the story a dead channel It the color of television happens above was . from various people a different story All I ',
        rate: 0,
        by: {
          _id: 's3zi',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'gnjK',
    title: 'I will do full music production of your song',
    price: 608,
    owner: {
      _id: 'u101',
      fullname: 'Stephen Lauren ',
      ownerCountry: 'belgium ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b35d99529052a133d6e93e8c22e1e9a3-635687601663244351727/JPEG_20220915_091910_5281127426319624923.jpg',
      level: 'Basic ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 8,
    description: '. was I ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132558750/original/d075b2c0d807c9c7039429d24fb8012d20394251.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '3W8n',
        txt: 'in such cases bit by bit The sky as generally to this happened a pleasure All this happened The sky It in such cases this happened to it happens ',
        rate: 4,
        by: {
          _id: 'Rv46',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'ynC1',
    title: 'I will be your platinum record music producer',
    price: 422,
    owner: {
      _id: 'u101',
      fullname: 'Brandon Joseph ',
      ownerCountry: 'Tha ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/75b8fd36e6edec3544edc6628893daa2-1602764817345/ef090646-57ef-4b09-9142-57397f598e66.jpg',
      level: 'Basic ',
      rate: 4,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'in such cases the story in such cases ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_17.268086,t_main1,q_auto,f_auto/dsrgdqugw88ujrvso5mt/produce-your-pop-track-or-cover.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'y925',
        txt: 'was a different story . the port this happened tuned tuned . had bit by bit and The sky in such cases All . as generally ',
        rate: 3,
        by: {
          _id: 'RGG1',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '13W1',
    title: 'I will produce your latin song',
    price: 638,
    owner: {
      _id: 'u101',
      fullname: 'Brian Robert ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/84bda992e7672093cbe05d83bdf7d24f-1657797625664/7823c36d-b90b-43d1-b443-f69e1ef56166.jpg',
      level: 'Basic ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 6,
    description: 'The sky tuned to ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/wzxpaqjjucltryekgrdb.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '3tpu',
        txt: '. to I this happened a different story the port the port to to from various people tuned had had as generally . All ',
        rate: 4,
        by: {
          _id: 'ieWN',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'jpG3',
    title: 'I will be your pro composer for rock, metal song or cover music',
    price: 307,
    owner: {
      _id: 'u101',
      fullname: 'Eric Danielle ',
      ownerCountry: 'Pol ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/38536617/original/SOLITARYLOGOITUNES.jpg',
      level: 'Basic ',
      rate: 3,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'tuned was was ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_33.748866,t_main1,q_auto,f_auto/i4gsxs2r0rw051dokhgn/write-a-metal-or-rock-song-for-you.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '69nr',
        txt: 'All more or less It happens I was was had burn . the story happens It above bit by bit had ',
        rate: 2,
        by: {
          _id: 'j9uR',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'v29j',
    title: 'I will be your ghost producer',
    price: 484,
    owner: {
      _id: 'u101',
      fullname: 'Mark Matthew ',
      ownerCountry: 'Pol ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9a7c1d9f234296264d360d31bbe94a48-1648490138496/68d7f94d-1652-4212-9701-7bd0fd8b3a57.JPG',
      level: 'Basic ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'All All was ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/101678310/original/62f9387aee7b57215f8047e3b62c87870b5da88b.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'zG1Y',
        txt: 'the port . . to a different story I It in such cases a pleasure I tuned was and each time to All ',
        rate: 2,
        by: {
          _id: 'G064',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '42nX',
    title: 'I will create relaxing , emotional piano music for you',
    price: 706,
    owner: {
      _id: 'u101',
      fullname: 'Jacob Matthew ',
      ownerCountry: 'Pol ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a585f716883aa1e4472afbe27b799cec-1654249286963/05aef735-2537-4fb7-a67b-da1db21091fd.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 7,
    description: 'All as generally The sky ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/syuyf0ptkiytt82d8otj/create-relaxing-emotional-piano-music-for-you.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '54zt',
        txt: '. . it It . was this happened . I as generally as generally was from various people had happens from various people ',
        rate: 1,
        by: {
          _id: '6rzW',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'yhM8',
    title: 'I will produce anime or japanese song style for you',
    price: 922,
    owner: {
      _id: 'u101',
      fullname: 'Heather Timothy ',
      ownerCountry: 'Ukraine ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b58cac21dc9c4fd715044dfb9faddbd9-1648997995405/c04a3503-fa2c-453b-900c-a36d2fc9d8cd.jpg',
      level: 'Premium ',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 10,
    description: 'from various people the port as generally ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/ll2kbljooylmogsuv4ua/produce-anime-song-for-you.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'y2sj',
        txt: 'The sky a different story was was was All I as generally more or less . . in such cases from various people I the story happens ',
        rate: 1,
        by: {
          _id: 'M4i3',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '1Gpe',
    title: 'I will be your music producer, ghost production',
    price: 772,
    owner: {
      _id: 'u101',
      fullname: 'William Michael ',
      ownerCountry: 'Moroco ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/82ea7ddaa0cc7f171ff5a871e9bb5bec-1648920053416/0881ef1c-5734-4b68-bfd9-3aadaf5e4a9e.jpg',
      level: 'Gold ',
      rate: 2,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 4,
    description: '. burn the story ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/138364513/original/f3a92aac76ed783e1cf74d00b2c4550267de0e42.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'p6si',
        txt: 'The sky it . to burn above . a different story All to burn more or less it in such cases as generally a different story ',
        rate: 0,
        by: {
          _id: 'b98M',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '36NR',
    title:
      'I will produce a rock or metal song with jpop japan anime ost style',
    price: 289,
    owner: {
      _id: 'u101',
      fullname: 'William Melissa ',
      ownerCountry: 'Isr ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0a65a53a5dd379142afbdfade9895094-1587109477485/bb7d6774-a5a7-4c04-afd9-72a09fa0acb3.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 10,
    description: 'the port tuned had ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/235091809/original/661afeec5dba47fbe267fc596b290eddcca39a77.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'xrLW',
        txt: 'All the story from various people more or less I the color of television as generally the color of television a pleasure to the port from various people from various people burn had The sky ',
        rate: 2,
        by: {
          _id: '6LnK',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '67X2',
    title: 'I will make hard rock, classic rock song for you',
    price: 375,
    owner: {
      _id: 'u101',
      fullname: 'Kevin Eric ',
      ownerCountry: 'Algir ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/01eefd2d0b7189e11c385fa791a10524-1648540760133/6f46b2e2-dc42-4527-9884-38025a151512.jpg',
      level: 'Premium ',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'I All All ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/j2n3tmrfy2u9aqwvlq9c/make-hard-rock-classic-rock-song-for-you.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '6Hsn',
        txt: 'I . the color of television tuned it more or less had it the color of television more or less . . the color of television in such cases . as generally ',
        rate: 2,
        by: {
          _id: 'zuXn',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '3nbh',
    title: 'I will be your music producer edm ghost production',
    price: 852,
    owner: {
      _id: 'u101',
      fullname: 'Crystal Brittany ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/224c9641cec8b14454a250616ff70b1b-1653065010831/269f2796-0027-44ff-9405-591a1b45ff79.png',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 5,
    description: 'in such cases . a pleasure ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/248678351/original/c20c631c8701b2ae44338b081239e1a86c269cca.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '9nMG',
        txt: 'in such cases to the color of television the port in such cases The sky . this happened a different story had . to each time a dead channel this happened The sky ',
        rate: 3,
        by: {
          _id: '5vWn',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'hvR2',
    title: 'I will record cover or backing track for any song',
    price: 935,
    owner: {
      _id: 'u101',
      fullname: 'Anthony Danielle ',
      ownerCountry: 'Brazil ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/df5e1ef93fea1e1156c20776ac0a6c8d-1648862879899/1c67629c-2fef-491d-8752-100a405c2386.jpg',
      level: 'Basic ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 8,
    description: '. was this happened ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/cobhsu2fctlnhc5pujnw/record-cover-or-backing-track-for-any-song.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '37RC',
        txt: 'each time . It a different story it each time more or less was each time from various people to . the story a different story the color of television more or less ',
        rate: 0,
        by: {
          _id: '7nHR',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: 'W35R',
    title: 'I will create a jazz piano music',
    price: 836,
    owner: {
      _id: 'u101',
      fullname: 'Justin Kevin ',
      ownerCountry: 'Rus ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7690847e10a8ec218a561560c3294501-1644398984242/5b1c1cd7-6da0-4075-a60d-11887a517d5b.JPG',
      level: 'Basic ',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 7,
    description: 'tuned The sky above ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200560716/original/607a3ffa6245afe35daed0599fd21a2cf5d4aaab.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'n6hX',
        txt: 'in such cases . tuned the color of television a different story was it to . I in such cases was to The sky burn bit by bit ',
        rate: 0,
        by: {
          _id: 'xRRv',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '63vd',
    title: 'I will create an original song for you',
    price: 895,
    owner: {
      _id: 'u101',
      fullname: 'Kevin Michael ',
      ownerCountry: 'Tha ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/fce81510ef6bedbc1940d1d23a92fc32-751371611599378768074/JPEG_20200906_045242_2382704333050961583.jpg',
      level: 'Premium ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'was it was ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/mlq5vopjvbnplu8dv0tu/produce-a-full-song-for-you.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'yNXn',
        txt: 'the story happens burn The sky in such cases . from various people The sky was was the color of television was the color of television to above It ',
        rate: 0,
        by: {
          _id: 'jL6u',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '66z0',
    title: 'I will produce, mix and master your song',
    price: 99,
    owner: {
      _id: 'u101',
      fullname: 'Lauren Mark ',
      ownerCountry: 'Pol ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2c2d55fad78269a8d509d93a331eddf5-1656792035472/d3e5d40e-1883-4099-8dd3-f775ec47356d.jpeg',
      level: 'Gold ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 3,
    description: 'each time It tuned ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/171395377/original/891cbf02ac8a6d6b845c8f69ecee504b1fe56630/produce-mix-and-master-your-song.jpg',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: '4W7K',
        txt: 'each time the story from various people . burn to as generally . to was the port above and from various people It It ',
        rate: 4,
        by: {
          _id: '3yy9',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '3iC6',
    title: 'I will write and produce fun childrens music and kids songs',
    price: 38,
    owner: {
      _id: 'u101',
      fullname: 'William Jonathan ',
      ownerCountry: 'Usa ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c0058681cb8dd5803943b8f59380f718-1648747173496/80feaf39-d799-4db3-839f-bec087687838.jpg',
      level: 'Gold ',
      rate: 0,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 7,
    description: 'was . it ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/videos/so_5.346422,t_main1,q_auto,f_auto/ih51gpio6px7ub1opv88/be-your-edm-ghost-producer.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'NWnG',
        txt: 'as generally the port It . a different story . above above in such cases It this happened to to more or less was each time ',
        rate: 4,
        by: {
          _id: '3Hyu',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
  {
    _id: '6ypR',
    title: 'I will write and produce fun childrens music and kids songs',
    price: 398,
    owner: {
      _id: 'u101',
      fullname: 'Amy Jennifer ',
      ownerCountry: 'France ',
      imgUrl:
        'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4a43f7f1582964ce3d7c15ab28697580-1644008533718/26029836-d99a-41e8-bc9a-2c9e9578047b.jpg',
      level: 'Gold ',
      rate: 1,
      memberSince: 'march 2015',
      avgResponseTime: '1 hour',
      lastDelivery: 'about 17 hours',
      ownerLetter:
        'Hi, May ur here I am a professional graphic designer with an experience of 10+ years. Let my field of expertise collaborate with your level of imagination, so together we can create an exceptional brand image. Something which creates an impact. Impact which screams for its acknowledgment without you needing to do so. Let us make wonders together in this field of designing. Keep exploring',
      username: 'user',
    },
    daysToMake: 1,
    description: 'It more or less bit by bit ',
    longerDescription:
      'Youre in the right place For $40 Ill draw you a colorfull and modern  trippy dripping style illustration in  less than 7 days. Perfect for stickers, your website, app, blog, album or single  cover or for anything you want.   Let me make your ideas come to life with a lot of dripping color.',
    imgUrl:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/242934288/original/3aa4c6e71522a04b62fb9208c40f9ddd1fc301a6.png',
    tags: ['logo - design', 'artisitic', 'proffesional', 'accessible'],
    likedByUsers: ['mini-user'],
    reviews: [
      {
        id: 'ujsW',
        txt: 'a pleasure a different story the color of television The sky above in such cases happens was in such cases a dead channel had a pleasure . in such cases from various people . ',
        rate: 2,
        by: {
          _id: 'sWL2',
          fullname: 'jeffgordon123',
          imgUrl:
            'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
          country: 'United Kingdom',
          flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
          reviewedAt: 'Published 3 weeks ago',
          memberSince: 'may 2012',
          avgResponseTime: '2 hours',
          lastDelivery: 'about 14 hours',
          ownerLetter:
            'Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.',
        },
      },
    ],
  },
]

// const updatedGigs = gDefaultGigs.map(gig => {
//   delete gig.order
//   delete gig.user
//   gig.reviews = [
//     {
//       id: utilService.makeId(4),
//       txt: utilService.makeLorem(16),
//       rate: utilService.getRandomIntInclusive(0, 4),
//       by: {
//         _id: utilService.makeId(4),
//         fullname: 'jeffgordon123',
//         imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b5b46e55a8b4ac6240874ee2271cf9fd-1598818335946/4458cfa4-f67e-467d-a624-37aaeae5fcad.jpg',
//         country: 'United Kingdom',
//         flag: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
//         reviewedAt: 'Published 3 weeks ago',
//         memberSince: 'may 2012',
//         avgResponseTime: '2 hours',
//         lastDelivery: 'about 14 hours',
//         ownerLetter: `Excellent experience, highly recommended. Communications were very quick and clear. Prices are very reasonable, Job was completed same-day. Excellent quality product. Will definitely be using this service again in the future and recommending to other musicians.`,
//       },
//     }
//   ]
//   gig.owner.username = 'user'
//   return gig
// })

// console.log(updatedGigs)
