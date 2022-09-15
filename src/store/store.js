import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import thunk from 'redux-thunk'
import { gigReducer } from './reducers/gig.reducer.js'
import { userReducer } from './reducers/user.reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  gigReducer: gigReducer,
  userModule: userReducer,
})

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
window.gStore = store
