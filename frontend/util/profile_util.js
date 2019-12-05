export const createProfile = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/profile_icons',
  })
}

export const updateProfile = (profile_id, image_url) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profile_icons/`,
    data: { profile_id, image_url }
  })
}
