import { storageService } from '../../src/services/async-storage'
import { utilService } from './util.service'
import { httpService } from './http.service'
// import { store } from '../store/store'
// import { getActionSetWatchedUser } from '../store/review.actions'
// import {
//     socketService,
//     SOCKET_EVENT_USER_UPDATED,
//     SOCKET_EMIT_USER_WATCH,
// } from './socket.service'
// import { showSuccessMsg } from '../services/event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveLocalUser,
  getUsers,
  getById,
  remove,
  update,
}

window.userService = userService

function getUsers() {
  // return storageService.query(STORAGE_KEY_LOGGEDIN_USER).then((users) => {
  //     if (!users || !users.length) {
  //         storageService.postMany(STORAGE_KEY_LOGGEDIN_USER, usersDefult)
  //         users = usersDefult
  //     }

  //     return users
  // })
  return httpService.get(`user`)
}

async function getById(userId) {
  // console.log(userId);
  // const user = await storageService.get(STORAGE_KEY_LOGGEDIN_USER, userId)
  const user = await httpService.get(`user/${userId}`)
  gWatchedUser = user
  return user
  //
  // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
  // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
  // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
}

function remove(userId) {
  // return storageService.remove(STORAGE_KEY_LOGGEDIN_USER, userId)
  return httpService.delete(`user/${userId}`)
}

async function update(user) {
  // await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
  user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) saveLocalUser(user)
  return user
}

async function signup(userCred) {
  console.log(userCred)
  // userCred.score = 10000
  // const user = await storageService.post(STORAGE_KEY_LOGGEDIN_USER, userCred)
  const user = await httpService.post('auth/signup', userCred)
  // socketService.login(user._id)
  return saveLocalUser(user)
}


async function login(userCred) {
  // console.log('@@@@@@@@@@@@@@@ user.service login', userCred);
  // const users = await storageService.query(STORAGE_KEY_LOGGEDIN_USER)
  // const user = users.find((user) => user.username === userCred.username)
  const user = await httpService.post('auth/login', userCred)
  if (user) {
    // socketService.login(user._id)
    return saveLocalUser(user)
  }
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  // socketService.logout()
  return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

