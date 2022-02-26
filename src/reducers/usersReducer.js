import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from 'constants/usersConstants'

const defaultState = {
  users: [],
  isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        users: action.users,
        isLoading: false,
      }
    }
    case FETCH_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}
