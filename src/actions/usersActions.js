import { USERS } from 'constants/apiUrls'
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from 'constants/usersConstants'

import client from './index'

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users,
})

const fetchUsersFailure = () => ({
  type: FETCH_USERS_FAILURE,
})

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
})

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest)
    const response = await client.get(USERS)
    const users = response.data
    dispatch(fetchUsersSuccess(users))
  } catch (err) {
    dispatch(fetchUsersFailure)
  }
}
