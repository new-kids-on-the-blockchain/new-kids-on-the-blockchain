import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import web3 from './web3'
import accounts from './accounts'
import contract from './contract'
import services from './services'
import threads from './threads'
import currentThread from './currentThread'
import users from './users'
import singleService from './singleService'
import currentUser from './currentUser'
import singleUser from './singleUser'

export const reducer = combineReducers({ web3, accounts, contract, services, threads, currentThread, users, singleService, currentUser, singleUser })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './web3'
export * from './accounts'
export * from './contract'
export * from './services'
export * from './threads'
export * from './users'
export * from './singleService'
export * from './currentUser'
export * from './singleUser'
export * from './currentThread'
