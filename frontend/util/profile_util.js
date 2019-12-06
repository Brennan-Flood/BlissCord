export const createProfile = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/profile_icons',
  })
}

export const updateProfile = (profile_icon) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profile_icons/${profile_icon.id}`,
    data: {profile_icon}
  })
}
