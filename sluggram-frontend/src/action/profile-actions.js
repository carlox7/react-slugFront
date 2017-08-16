//sync action creators
import superagent from 'superagent'

export const profileCreate = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile,
})

export const profileUpdate = (profile) => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
})

//async
export const profileCreateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.post(`${__API_URL__}/profile`)
    .set('Authorization', `Bearer ${auth}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then(res => {
      dispatch(profileCreate(res.body))
      return res
    })
}
