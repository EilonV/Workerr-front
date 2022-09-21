import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'
import { gigReducer } from './reducers/gig.reducer.js'
import { userReducer } from './reducers/user.reducer.js'
import { orderReducer } from './reducers/order.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  gigModule: gigReducer,
  userModule: userReducer,
  orderModule: orderReducer,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
window.gStore = store
