import * as ServerMembershipUtil from '../util/server_membership_util';

export const RECEIVE_SERVER_MEMBERSHIPS = 'RECEIVE_SERVER_MEMBERSHIPS';
export const RECEIVE_SERVER_MEMBERSHIP = 'RECEIVE_SERVER_MEMBERSHIP';
export const REMOVE_SERVER_MEMBERSHIP = 'REMOVE_SERVER_MEMBERSHIP';

const receiveMemberships = (members) => ({
  type: RECEIVE_SERVER_MEMBERSHIPS,
  members
})

const receiveServer = (serverMembership) => ({
  type: RECEIVE_SERVER_MEMBERSHIP,
  serverMembership,
})

const removeServerMembership = (serverMembership) => ({
  type: REMOVE_SERVER_MEMBERSHIP,
  serverMembership
})

export const fetchServerMemberships = (serverId) => (dispatch) => {
  return ServerMembershipUtil.fetchServerMemberships(serverId)
  .then(members => dispatch(receiveMemberships(members)))
}

export const createServerMembership = (serverMembership) => dispatch => {
  return ServerMembershipUtil.createServerMembership(serverMembership)
  .then(serverMembership => dispatch(receiveServer(serverMembership)))
}

export const deleteServerMembership = (serverId) => dispatch => {
  return ServerMembershipUtil.deleteServerMembership(serverId)
  .then(serverMembership => dispatch(removeServerMembership(serverMembership)))
}