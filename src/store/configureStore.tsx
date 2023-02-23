import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppActionTypes } from './actions/action.types'

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import blockReducer from './reducers/block'
import validatorReducer from './reducers/validator'
import addressReducer from './reducers/address'
import transactionReducer from './reducers/transaction'
import tokenReducer from './reducers/token'
import epochReducer from './reducers/epoch'
import chartReducer from './reducers/chart'
import searchReducer from './reducers/search'
import authReducer from './reducers/auth'
import miscReducer from './reducers/misc'
import statisticsReducer from './reducers/statistics'
import userReducer from './reducers/user'
import priceReducer from './reducers/price'
import adminReducer from './reducers/admin'
import contactusReducer from './reducers/contactus'

export const history = createBrowserHistory()

const middleware = [thunk as ThunkMiddleware<AppState, AppActionTypes>, routerMiddleware(history)]

const enhanceCompose = composeWithDevTools({ shouldCatchErrors: true })

const rootReducer = combineReducers({
  block: blockReducer,
  address: addressReducer,
  transaction: transactionReducer,
  token: tokenReducer,
  epoch: epochReducer,
  chart: chartReducer,
  validator: validatorReducer,
  search: searchReducer,
  auth: authReducer,
  misc: miscReducer,
  statistics: statisticsReducer,
  user: userReducer,
  price: priceReducer,
  admin: adminReducer,
  router: connectRouter(history),
  contactus: contactusReducer,
})

const store: Store<AppState, any> = createStore(rootReducer, enhanceCompose(applyMiddleware(...middleware)))

export default store
export type AppState = ReturnType<typeof rootReducer>
