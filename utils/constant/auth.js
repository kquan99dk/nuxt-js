import { TOKEN_USER } from './config'

/**
 * get bearer token from local storage
 */
export const getToken = () => {
  if (process.client) {
    if (TOKEN_USER in localStorage) {
      console.log(1212)
      const token = localStorage.getItem(TOKEN_USER)
      return token || null
    }
  }

  return null
}

export const setToken = (_token) => {
  if (!_token) { return }
  localStorage.setItem(TOKEN_USER, _token)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_USER)
}
