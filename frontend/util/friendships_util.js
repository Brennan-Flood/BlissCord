export const fetchFriendships = () => {
  return $.ajax({
    url: '/api/friendships'
  })
}

export const createFriendship = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { friendship }
  })
}

export const deleteFriendship = (friendshipId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/friendships/${friendshipId}`
  })
}