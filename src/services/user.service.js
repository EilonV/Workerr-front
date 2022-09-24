import { storageService } from '../../src/services/async-storage'
import { utilService } from './util.service'
// import { httpService } from './http.service'
import { store } from '../store/store'
// import { getActionSetWatchedUser } from '../store/review.actions'
// import {
//     socketService,
//     SOCKET_EVENT_USER_UPDATED,
//     SOCKET_EMIT_USER_WATCH,
// } from './socket.service'
// import { showSuccessMsg } from '../services/event-bus.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null;


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
    console.log(usersDefult);
    return storageService.query(STORAGE_KEY_LOGGEDIN_USER, usersDefult)
    // return httpService.get(`user`)
}

// function onUserUpdate(user) {
//     showSuccessMsg(
//         `This user ${user.fullname} just got updated from socket, new score: ${user.score}`
//     )
//     store.dispatch(getActionSetWatchedUser(user))
// }

async function getById(userId) {
console.log(userId);
    const user = await storageService.get(STORAGE_KEY_LOGGEDIN_USER, userId)
    // const user = await httpService.get(`user/${userId}`)

    // socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    // socketService.off(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    // socketService.on(SOCKET_EVENT_USER_UPDATED, onUserUpdate)
    gWatchedUser = user;
    console.log(userId);
    return user;
}


function remove(userId) {
    return storageService.remove(STORAGE_KEY_LOGGEDIN_USER, userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    await storageService.put(STORAGE_KEY_LOGGEDIN_USER, user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_LOGGEDIN_USER)
    const user = users.find((user) => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    console.log(userCred);
    // userCred.score = 10000
    const user = await storageService.post(STORAGE_KEY_LOGGEDIN_USER, userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)||'null')
}

const usersDefult = [

    {
        fullname: 'Guy',
        imgUrl: 'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0f37300e1e09cba08685e3c85a4ceb3f-1661447564773/305c8f97-9a87-449a-908a-20275c9ab8d4.jpg',
        username: 'user1',
        password: 'secret',
        _id: '622f3401e36c59e6164faguy',
     
    },

    // {
    //     fullname: 'Edgar',
    //     imgUrl: 'https://a0.muscache.com/im/pictures/d17abb7c-beb0-4dbe-976e-fc633de18b4b.jpg?aki_policy=profile_small',
    //     username: '75091963',
    //     password: 'Edgar',
    //     _id: 'h123564',
    // },

    // {
    //     fullname: 'Leo',
    //     imgUrl: 'https://robohash.org/59985?set=set1',
    //     username: '59985',
    //     password: 'Leo',
    //     _id: 'h12554',
    // },

    // {
    //     fullname: 'Margaux',
    //     imgUrl: 'https://robohash.org/3805403?set=set1',
    //     username: '3805403',
    //     password: 'Margaux',
    //     _id: 'h1234',
    // },

    // {
    //     fullname: 'Francine',
    //     imgUrl: 'https://robohash.org/25851994?set=set1',
    //     username: '25851994',
    //     password: 'Francine',
    //     _id: utilService.makeId(4),
    // },

    // {
    //     fullname: 'Winnie',
    //     imgUrl: 'https://robohash.org/1205536?set=set1',
    //     username: '1205536',
    //     password: 'Winnie',
    //     _id: utilService.makeId(4),
    // },


]
