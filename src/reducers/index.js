import { combineReducers } from 'redux'

import usersState from './usersReducer'

const reducers = { usersState }

const createRootReducer = () =>
  combineReducers({
    ...reducers,
  })

export default createRootReducer
