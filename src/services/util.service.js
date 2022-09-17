export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  delay,
  makeImg,
}

function makeId(length = 6) {
  var txt = ''
  var possible =
    'GbHi8bXxRWphv2nRe3js3W69CrMinNGtLdWyYrnnKzHR26vu4gyz0123456789'

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}

function makeImg(size = 1) {
  var words = [
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180975848/original/38493411675d6228a01307dc5f409f8909b6f440.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/h93uyegy1l0ym2w8myvm.png&usqp=CAF',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134138878/original/1a446d41f8b277fff8b2b0f07cf84962dfbf3ff5.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268108524/original/2b891bd971bbae9ed374779b8222dcd1336fd713.jpeg',
    'https://fiverr-res.cloudinary.com/image/upload/w_430/q_auto,f_auto/v1/attachments/generic_asset/asset/a94b3d3be392ebed6d84fd3c678ebe93-1593446014511/live%20stream-fiverr%20guide.jpg',
    'https://fiverr-res.cloudinary.com/image/upload/w_430/q_auto,f_auto/v1/attachments/generic_asset/asset/c107cea1eb9b99825c7fb935ef388730-1593447852749/explainer%20videos-fiverr%20guide.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/20715887/original/5f8cda71487914972eb96f21172c3493844ce7f6.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228204077/original/0e67ea24213a39863acb07114ef8d8f94995f34e.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_9.127117,t_gig_cards_web/bamft0stu5tonwe65f7c.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_67.025563,t_gig_cards_web/oiuutpqaktmraomavcjn.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_32.0690694,t_gig_cards_web/obfsb5nyo4dn3bjqoygf.png ',
    'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/iprpjidd046mrhkic6vn.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_10.406597,t_gig_cards_web/gwldo5lkp0uu5ucjhlob.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_36.189074,t_gig_cards_web/tipmwbddkwvsjp8vu8h4.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_25.383732,t_gig_cards_web/ccbuy246nzgyxjqfctyp.png',
    ' https://fiverr-res.cloudinary.com/video/upload/so_24.423027,t_gig_cards_web/g9rj15lf0icjbymfbiyj.png',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function makeLorem(size = 100) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
