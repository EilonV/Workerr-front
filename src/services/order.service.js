import { storageService } from './async-storage'
import { utilService } from './util.service'
// import { utilService } from './util.service'

export const orderService = {
  query,
  save,
  remove,
  getById,
  changeStatus,
}

const STORAGE_KEY = 'order'

function query() {
  return storageService.query(STORAGE_KEY).then((orders) => {
    if (!orders || !orders.length) {
      storageService.postMany(STORAGE_KEY, gDefaultOrders)
      orders = gDefaultOrders
    }

    return orders
  })
}

function getById(orderId) {
  // console.log(orderId)
  const res = storageService.get(STORAGE_KEY, orderId)
  // console.log(res)
  return res
}

function remove(orderId) {
  // console.log('orderId:', orderId)
  return storageService.remove(STORAGE_KEY, orderId)
}

function save(order) {
  if (order._id) {
    return storageService.put(STORAGE_KEY, order)
  } else {
    order._id = utilService.makeId(4)
    order.createdAt = Date.now()
    order.status = 'pending'
    return storageService.post(STORAGE_KEY, order)
  }
}

async function changeStatus(order) {
  const updatedOrder = await save(order)
  return updatedOrder
}

const gDefaultOrders = [
  {
    _id: utilService.makeId(10),
    createdAt: Date.now(),
    buyer: {
      fullname: 'Guy',
      _id: '622f3401e36c59e6164faguy',
    },
    seller: {
      fullname: 'Edgar',
      _id: '622f3401e36c59e6164fab4d',
    },
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },

  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
  {
    _id: utilService.makeId(10),
    createdAt: new Date().toDateString(),
    buyer: utilService.randomUserName(2),
    seller: utilService.randomUserName(2),
    gig: {
      _id: utilService.makeId(10),
      name: utilService.randomUserName(2),
      price: utilService.getRandomInt(1, 50),
    },
    status: 'pending',
  },
]
