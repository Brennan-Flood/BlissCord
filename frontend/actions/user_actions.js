import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
})

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const fetchUsers = () => (dispatch) => {
  return UserUtil.fetchUsers()
  .then(users => dispatch(receiveAllUsers(users)))
}

export const fetchUser = (userId) => (dispatch) => {
  return UserUtil.fetchUser(userId)
  .then((user) => dispatch(receiveUser(user)))
}