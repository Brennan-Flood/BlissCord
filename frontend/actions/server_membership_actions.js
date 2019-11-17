import * as ServerMembershipUtil from '../util/server_membership_util';

export const RECEIVE_SERVER_MEMBERSHIP = 'RECEIVE_SERVER_MEMBERSHIP';
export const REMOVE_SERVER_MEMBERSHIP = 'REMOVE_SERVER_MEMBERSHIP';


const receiveServer = (serverMembership) => ({
  type: RECEIVE_SERVER_MEMBERSHIP,
  serverMembership,
})

const removeServerMembership = (serverMembership) => ({
  type: REMOVE_SERVER_MEMBERSHIP,
  serverMembership
})

export const createServerMembership = (serverMembership) => dispatch => {
  return ServerMembershipUtil.createServerMembership(serverMembership)
  .then(serverMembership => dispatch(receiveServer(serverMembership)))
}

export const deleteServerMembership = (serverId) => dispatch => {
  return ServerMembershipUtil.deleteServerMembership(serverId)
  .then(serverMembership => dispatch(removeServerMembership(serverMembership)))
}