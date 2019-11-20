export const fetchUsers = () => {
  return $.ajax({
    url: `/api/users`
  })
}

export const fetchUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`
  })
}