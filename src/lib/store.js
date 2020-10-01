import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import {taskReducer} from './reducer'

const middleWare = applyMiddleware(logger, thunk)
const store = createStore(taskReducer, middleWare)
export default store
