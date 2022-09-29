export const utilService = {
  makeId,
  makeLorem,
  getRandomInt,
  delay,
  makeImg,
  randomUserName,
  makeUserImg,
  makeLevel,
  makeTitle,
  makeCountry,
  makeMonth,
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

function makeLevel(size = 1) {
  var level = ['Basic', 'Premium', 'Gold']
  var txt = ''
  while (size > 0) {
    size--
    txt += level[Math.floor(Math.random() * level.length)] + ' '
  }
  return txt
}

function makeCountry(size = 1) {
  var country = [
    'Usa',
    'Israel',
    'Russia',
    'Poland',
    'Thailand',
    'Mexico',
    'Brazil',
    'United Kingdom',
    'Ukraine',
    'Algire',
    'France',
    'belgium',
    'Moroco',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += country[Math.floor(Math.random() * country.length)] + ' '
  }
  return txt
}

function makeMonth(size = 1) {
  var country = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += country[Math.floor(Math.random() * country.length)] + ' '
  }
  return txt
}

function makeUserImg(size = 1) {
  var userImg = [
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/59867eb7c18f06df9f5b90845c2f9093-686938021605279639.942445/2F2A11E1-E0A0-4C7D-B7AE-18E94F34D61A',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0f37300e1e09cba08685e3c85a4ceb3f-1661447564773/305c8f97-9a87-449a-908a-20275c9ab8d4.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5f0d58adec1d7c5d5aa7594b62f14907-1654617726875/a2428669-0b45-41b3-875f-1d84a0c70ef4.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/bc7220f69e3da059834ce6c49b8ef1e0-1607901488501/9e72d132-58cb-4d3a-9a5f-5c4915acbd3a.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9138ed24097996bd6bfa18b0ca7927b1-1600243960945/1d6ea384-e1d3-4bdd-8531-c4b8432c2700.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/cc1c738e97cc00657711639ccfd84165-1643570411046/501f72b6-86be-4a24-93e9-112e2bf8242a.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b236422e1e4353a0dfcdd742cc90294c-1575541264407/84c5cb85-0247-4ebc-99f5-cde5c013e202.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/870361a679c70d3352667b255f77ef3e-1659279519511/daadcd47-7151-4ad2-b1a4-589c26660cd4.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/e419bb6475046a78926e14d0d6e05365-963979141632002301057/JPEG_20210919_025820_3178139473183381584.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d2238f403f48a198a7abb68fbfc5540d-1654444764134/9dd351a5-12d2-436d-935a-3ecf4cad2b24.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/bcb4f0c88c1c32f21a163f702654eba7-1648830129343/c4b53e8c-73af-47b8-9d0f-87c6fbfdfc00.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/29c1c8533969b83a4262bffcedcd3389-1648627365295/60c4dd3b-96c7-4c8c-aef6-f9611663dba6.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4fa948731b5a385575968b8de46fbb89-1649462286222/c02aaee0-a3ae-4b3c-9def-a985545c2833.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a1c3931a80dcbc5f5a8fd92003bdacdf-1630671177319/f2fc5ad3-afbe-4ee6-8391-719677d89c76.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8e25ec47a2f90d57d97a3142a42f48c1-1549895944830/064d1480-b8e5-4dcf-85f6-b7891f4aa054.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/100a73a03b43719b6e016439f7cb66a9-1601805609976/682f912b-292f-464a-bc5c-60d353b88a40.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/bf5c452ba37a969d49123ddaa52c9e8f-1651802541562/8be10932-d82a-43cc-a106-032fdade978e.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0e87a6d3570c4865f03d3656824f893c-1626213219973/2a293faf-a3ff-467f-89e0-2a635190e733.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7dc940130bc9204ff9cceb0e1f6b14ff-1637831766903/cc5f18bd-3520-4da3-8d95-df28494b0109.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/25437962/original/10906561_10152686598200892_8241773211393227729_n_1_pv7fs9.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/559690c9c0b0b62ef2af7df52a0199e1-1662196068150/07e5b3e8-dd26-4d51-b7f4-fec8b7452c53.jpeg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ca13cf383d76485985b10f3b5fe4e6b1-1529691233663/a7635068-dc45-4b72-8682-124d480d9696.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/55766cff7c9e9bc02910e13814c38171-1649814054029/409f6ffd-4b90-4b5e-af80-cda2803ccb73.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/fb6afdf4a3259ad80e5cb3f3e7c7613b-1618819374795/500b9ba0-352d-48df-988e-3b9299c4d019.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/48397e16d9a89f54498964e1bc751be2-1511014026633/8cd59cb9-73c5-4a10-a395-5074f085cccf.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f2f043a37d27cfdef2188851f0009b79-1626376201850/52dcf451-e571-44e0-9e21-3a8573c0aeba.jpg',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/a45de6be4e5eaf8c5799cb336bbe90e4-1646950209192/f2995c8e-211f-4494-8167-50fedacde45c.png',
    'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8bffe9d20386606a3cb8cebd2b0d2102-1654378677183/47270d9f-d6b6-4fe0-b2ca-bbdab9f7d0fe.jpg',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += userImg[Math.floor(Math.random() * userImg.length)] + ' '
  }
  return txt
}

function makeTitle(size = 1) {
  var words = [
    'i will teach you photoshop',
    'i will how to be good social manager',
    'i will be your social manager',
    'i will record you a video clip',
    'i will teach how to be in confidence',
    'i will translate from German to English',
    'i will translate from Czhech to English',
    'i will catch your eye lyric',
    'i will paint for you',
    'i will make you tatoo',
    'i will teach how to dance',
    'i will teach you css & scss',
    'i will teach you to do cover songs',
    'i will teach you to play piano',
    'i will improve your voice',
    'i will teach you play on violin',
    'i will teach how to cook',
    'i will teach you how to bake cookies',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += words[Math.floor(Math.random() * words.length)] + ' '
  }
  return txt
}

function makeImg(size = 1) {
  var urlImg = [
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/180975848/original/38493411675d6228a01307dc5f409f8909b6f440.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/134138878/original/1a446d41f8b277fff8b2b0f07cf84962dfbf3ff5.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268108524/original/2b891bd971bbae9ed374779b8222dcd1336fd713.jpeg',
    'https://fiverr-res.cloudinary.com/image/upload/w_430/q_auto,f_auto/v1/attachments/generic_asset/asset/a94b3d3be392ebed6d84fd3c678ebe93-1593446014511/live%20stream-fiverr%20guide.jpg',
    'https://fiverr-res.cloudinary.com/image/upload/w_430/q_auto,f_auto/v1/attachments/generic_asset/asset/c107cea1eb9b99825c7fb935ef388730-1593447852749/explainer%20videos-fiverr%20guide.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/20715887/original/5f8cda71487914972eb96f21172c3493844ce7f6.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/228204077/original/0e67ea24213a39863acb07114ef8d8f94995f34e.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_67.025563,t_gig_cards_web/oiuutpqaktmraomavcjn.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_32.0690694,t_gig_cards_web/obfsb5nyo4dn3bjqoygf.png ',
    'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/iprpjidd046mrhkic6vn.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_10.406597,t_gig_cards_web/gwldo5lkp0uu5ucjhlob.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_36.189074,t_gig_cards_web/tipmwbddkwvsjp8vu8h4.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_25.383732,t_gig_cards_web/ccbuy246nzgyxjqfctyp.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_0.925555,t_gig_cards_web/xgbjbougwbay0hjy4gg5.png',
    'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/ud4kat29e2orxg6waoyc.png',
    'https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/ffm4tiytazmomkfikzfr.png',
    'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/pvgzslyp7zotusct6ena.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/236865237/original/506c8f4d29f5337d923acffbf9e26318cc273ac7.jpg',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199961532/original/c5a1ab4016cea2c364839cf2ad7faa6d56f0b458.jpeg',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += urlImg[Math.floor(Math.random() * urlImg.length)] + ' '
  }
  return txt
}

function randomUserName(size = 2) {
  var names = [
    'Michael',
    'Christopher',
    'Jessica',
    'Matthew',
    'Ashley',
    'Jennifer',
    'Joshua',
    'Amanda',
    'Daniel',
    'David',
    'James',
    'Robert',
    'John',
    'Joseph',
    'Andrew',
    'Ryan',
    'Brandon',
    'Jason',
    'Justin',
    'Sarah',
    'William',
    'Jonathan',
    'Stephanie',
    'Brian',
    'Nicole',
    'Nicholas',
    'Anthony',
    'Heather',
    'Eric',
    'Elizabeth',
    'Adam',
    'Megan',
    'Melissa',
    'Kevin',
    'Steven',
    'Thomas',
    'Timothy',
    'Christina',
    'Kyle',
    'Rachel',
    'Laura',
    'Lauren',
    'Amber',
    'Brittany',
    'Danielle',
    'Richard',
    'Kimberly',
    'Jeffrey',
    'Amy',
    'Crystal',
    'Michelle',
    'Tiffany',
    'Jeremy',
    'Benjamin',
    'Mark',
    'Emily',
    'Aaron',
    'Charles',
    'Rebecca',
    'Jacob',
    'Stephen',
    'Patrick',
  ]
  var txt = ''
  while (size > 0) {
    size--
    txt += names[Math.floor(Math.random() * names.length)] + ' '
  }
  return txt
}

function makeLorem(size = 3) {
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

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
