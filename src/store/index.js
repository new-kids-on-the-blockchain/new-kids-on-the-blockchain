import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import web3 from './web3'
import contract from './contract'
import accounts from './accounts'
import services from './services'
import singleService from './singleService'
import agreements from './agreements'
import users from './users'


export const reducer = combineReducers({ web3, contract, accounts, services, agreements,  users, singleService })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './web3'
export * from './services'
export * from './contract'
export * from './agreements'
export * from './users'
export * from './singleService'
