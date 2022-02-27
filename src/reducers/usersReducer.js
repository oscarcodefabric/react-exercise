import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  SET_LIKE_USER,
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
    case SET_LIKE_USER: {
      const { id } = action
      const { users } = state
      const chosenUser = users.find((user) => user.id === id)
      const liked = chosenUser.liked ? true : false
      const changedUsers = users.map((user) =>
        id === user.id
          ? {
              ...user,
              liked: !liked,
            }
          : user
      )
      return {
        ...state,
        users: changedUsers,
      }
    }
    default:
      return state
  }
}
