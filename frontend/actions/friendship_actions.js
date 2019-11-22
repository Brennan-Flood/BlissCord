
import * as FriendshipUtil from '../util/friendships_util';

export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

const receiveFriendships = (friendships) => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships
})

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
})

const removeFriendship = (friendship) => ({
  type: REMOVE_FRIENDSHIP,
  friendship
})

export const fetchFriendships = () => dispatch => {
  return FriendshipUtil.fetchFriendships()
  .then((friendships) => dispatch(receiveFriendships(friendships)))
}

export const fetchFriendship = (id) => dispatch => {
  return FriendshipUtil.fetchFriendship(id)
  .then((friendship) => dispatch(receiveFriendship(friendship)))
}

export const createFriendship = (friendship) => (dispatch) => {
  return FriendshipUtil.createFriendship(friendship)
  .then((friendship) => dispatch(receiveFriendship(friendship)))
}

export const acceptFriendship = (friendshipId) => (dispatch) => {
  return FriendshipUtil.acceptFriendship(friendshipId)
  .then((friendship) => dispatch(receiveFriendship(friendship)))
}

export const deleteFriendship = (friendshipId) => (dispatch) => {
  return FriendshipUtil.deleteFriendship(friendshipId)
  .then((friendship) => dispatch(removeFriendship(friendship)))
}