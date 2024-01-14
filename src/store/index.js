import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { tasksReducer} from './reducers'

const rootReducer = combineReducers({
  tasks: tasksReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))
