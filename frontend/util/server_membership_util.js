export const fetchServerMemberships = (serverId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/server_memberships',
    data: {server_id: serverId}
  })
}

export const createServerMembership = (server_membership) => {
  return $.ajax({
    method: 'POST',
    url: '/api/server_memberships',
    data: { server_membership },
  })
}

export const deleteServerMembership = (sever_membership_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/server_memberships/${sever_membership_id}`
  })
}