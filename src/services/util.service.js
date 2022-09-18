export const utilService = {
  makeId,
  makeLorem,
  getRandomIntInclusive,
  delay,
  makeImg,
  randomUserName,
  makeUserImg,
  makeLevel,
  makeTitle,
  makeCountry,
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
    'Isr',
    'Rus',
    'Pol',
    'Tha',
    'Mex',
    'Brazil',
    'UK',
    'Ukraine',
    'Algir',
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

const newImg = [
  'https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/zi9vophqo9wyccfyk4rc.png',
  'I will extract or remove drums bass vocals creating backing track',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/202488483/original/806fd73b7899cd827a2817bc2db0b6b8eb69c115.jpg',
  'I will compose emotive piano music',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/43f3b6c2513ceb853d7eac50bf8a8d24-1648565984586/b83873cb-cfc6-49fa-954c-a9a3529e4b6e.jpg',

  'https://fiverr-res.cloudinary.com/video/upload/so_66.2342621450047,t_gig_cards_web/tuhnn5o31keeaepu9fej.png',
  'I will produce, mix and master amazing music for you',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/123919942/original/33e571244a54683576c40f9b9927884721fe300e.png',
  'I will be your edm ghost producer',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/46657159/original/d81004f82d847933a3e944c87f6aea1fe2a0117b.jpg',
  'I will produce a professional quality bluegrass or country backing track',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/143350958/original/038fc8b05ffecf665a97016ba73c5252a4dcb1c0.jpeg',
  'I will compose and produce your soulful or gospel song',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/30ef50f8b667b89347e09ca9d692742f-1583863903962/8fd2ad2b-4016-445c-96a6-b9a3b0e156d9.jpeg',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/256418126/original/06f1d1a420c266a3f923c52b0c0323a0f48e914d.jpg',
  'I will be your music producer, ghost producer',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2cd412f99ba7ef9ac7fc240b5cd6ba85-1652964540466/368bab27-3539-4300-b3b0-21c2de8d68fd.png',

  'https://fiverr-res.cloudinary.com/videos/so_16.461057,t_main1,q_auto,f_auto/bobsafkbwfyvzkcrshtx/produce-instrumental-for-you-in-any-genre.png',
  'I will produce an original instrumental for you',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/da836c2ded02772f376d9b66d03e8d7c-1657247143616/6393bd7f-d699-4267-bf12-f090f4c30cfa.JPG',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/209535406/original/f9987f1PbqpeGUtu6gwPq2ujNkcnqEkDHqHqk2eR.png',
  'I will make deep chill and sensual house music for you',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2665acfd18b37fec8eba19a101693d4f-1652450077325/aa60bc86-aab4-4544-8600-3e0ac6514480.jpeg',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/247071165/original/9553d1ba4b8456b613e7de3ac35e21b61839fbe1.png',
  'I will be your pop music producer',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/94efe973ed3de694df45ab8a5f4a942a-1651544812806/3d1e4073-3fcb-460e-8e58-5e89ed58b142.PNG',

  'https://fiverr-res.cloudinary.com/video/upload/so_0.58378,t_gig_cards_web/ijxnutocxnyakosbpb8o.png',
  'I will produce the best piano instrumental cover track of any song',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/3c627d42b221ef7b26f0711acee63d76-1567524466203/0ded3f3b-776e-4be9-82b0-6c2cfd6f15ba.jpg',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/241489346/original/de1f8bf2cbf64b9dc0f45ee826f3034bcf9a147a.png',
  'I will compose the perfect soundtrack for your project',
  'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/716c01a806133a1bfffd1f1193daa0bd-1652460041127/e1f9a72a-3ef7-4205-baea-1a4b4046e41a.jpeg',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/197122247/original/fc8c2475847dfbd6f11a296f400f8c494055eae5.jpg',
  'I will record an original song based on your lyrics or idea',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/qgwbc0j5uydwwcgbmig1/arrange-or-produce-your-song.png',
  'I will arrange or produce your pop song',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/271220899/original/25e87c57227ff78333f002d859903dcef8cf9554.jpg',
  'I will make a zyzz style hardstyle remix for you',

  'https://fiverr-res.cloudinary.com/videos/so_74.030129,t_main1,q_auto,f_auto/nrjbeta35icfna8pynrz/create-orchestral-music-epic-orchestra-trailer-film-score.png',
  'I will compose cinematic music for your film or video game',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/184721743/original/da73f48358910208d3ce16196b44696f24a01f53.png',
  'I will be your music producer, ghost production',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/bnebzwaherc8nh8kkufp/produce-and-arrange-your-song.png',
  'I will do a full service song production',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/215625652/original/00d1b8ea3d0f4a6759477a6afb0009f31997787d.jpeg',
  'I will add an orchestra or chamber strings to your song or project',

  'https://fiverr-res.cloudinary.com/video/upload/so_6.717682,t_gig_cards_web/ikmbym6fvpzmzjkop2rs.png',
  'I will add an orchestra or chamber strings to your song or project',

  'https://fiverr-res.cloudinary.com/videos/so_62.664502,t_main1,q_auto,f_auto/syjkev459eze3ubmonjs/compose-a-professional-soundtrack-for-you-score-or-vsti.png',
  'I will create orchestral soundtrack for game or film, epic cinematic music or trailer',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/tdrfy3wra7shrz4z2q0h/ghost-produce-a-high-quality-edm-track-for-djs.png',
  'I will ghost produce a professional edm song for best record labels',

  'https://fiverr-res.cloudinary.com/videos/so_0.0,t_main1,q_auto,f_auto/tfbsa6nf1cwzojwpamdb/create-cinematic-trailer-or-epic-music-for-your-projects.png',
  'I will compose cinematic epic orchestral music',

  'I will do full music production of your song',
  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/132558750/original/d075b2c0d807c9c7039429d24fb8012d20394251.png',

  'https://fiverr-res.cloudinary.com/videos/so_17.268086,t_main1,q_auto,f_auto/dsrgdqugw88ujrvso5mt/produce-your-pop-track-or-cover.png',
  'I will be your platinum record music producer',

  'https://fiverr-res.cloudinary.com/video/upload/so_0.0,t_gig_cards_web/wzxpaqjjucltryekgrdb.png',
  'I will produce your latin song',

  'https://fiverr-res.cloudinary.com/videos/so_33.748866,t_main1,q_auto,f_auto/i4gsxs2r0rw051dokhgn/write-a-metal-or-rock-song-for-you.png',
  'I will be your pro composer for rock, metal song or cover music',

  'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/101678310/original/91PbqpeGUtu6gwPq2ujNkcnqEkDHqHqk2eR3ff83.png',
  'I will be your ghost producer',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/syuyf0ptkiytt82d8otj/create-relaxing-emotional-piano-music-for-you.png',
  'I will create relaxing , emotional piano music for you',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/ll2kbljooylmogsuv4ua/produce-anime-song-for-you.png',
  'I will produce anime or japanese song style for you',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/138364513/original/f3a92aac76ed783e1cf74d00b2c4550267de0e42.jpg',
  'I will be your music producer, ghost production',

  'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/235091809/original/661afeec5dba47fbe267fc596b290eddcca39a77.jpg',
  'I will produce a rock or metal song with jpop japan anime ost style',

  'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/j2n3tmrfy2u9aqwvlq9c/make-hard-rock-classic-rock-song-for-you.png',
  'I will make hard rock, classic rock song for you',
]
