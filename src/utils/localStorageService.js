
const accessToken = 'id_token'
export const getAccessToken = () => {
  return localStorage.getItem(accessToken)
}

export const removeAccessToken = () => {
  return localStorage.removeItem(accessToken)
}
export const setAccessToken = (token) => {
  localStorage.setItem(accessToken, token)
}

