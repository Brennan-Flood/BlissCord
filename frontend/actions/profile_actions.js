import * as ProfileUtil from '../util/profile_util';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
})

export const createProfile = (userId) => dispatch => {
  return ProfileUtil.createProfile(userId)
  .then((profile) => dispatch(receiveProfile(profile)))
}

export const updateProfile = (profileId, imageUrl) => {
  return ProfileUtil.updateProfile(profileId, imageUrl)
  .then((profile) => dispatch(receiveProfile(profile)))
}