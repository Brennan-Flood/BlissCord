import * as ServerUtil from '../util/server_util';

export const RECEIVE_ALL_SERVERS = 'RECEIVE_ALL_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

const receiveAllServers = (servers) => ({
  type: RECEIVE_ALL_SERVERS,
  servers
})

const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server
})

const removeServer = (serverId) => ({
  type:REMOVE_SERVER,
  serverId
})

export const fetchServers = () => (dispatch) => {
  return ServerUtil.fetchServers()
  .then(servers => dispatch(receiveAllServers(servers)))
}

export const fetchServer = (serverId) => (dispatch) => {
  return ServerUtil.fetchServer(serverId)
  .then(server => dispatch(receiveServer(server)))
}

export const createServer = (server) => (dispatch) => {
  return ServerUtil.createServer(server)
  .then(server => dispatch(receiveServer(server)))
}

export const updateServer = (server) => (dispatch) => {
  return ServerUtil.updateServer(server)
  .then(server => dispatch(receiveServer(server)))
}

export const deleteServer = (serverId) => (dispatch) => {
  return ServerUtil.deleteServer(serverId)
  .then(server => dispatch(removeServer(server.id)))
}