// import Vue from 'vue'
import { delay } from 'lodash'
import { initializeAxios } from '~/utils/api'

// @ts-ignore
const accessor = ({ $axios, app }) => {
  const INCORRECT_USER_PASS = 'Incorrect username and password.'
  const INCORRECT_CURRENT_PASS = 'Your current password is incorrect.'
  const INSUFFICIENT_PERMISSION = 'You are not allowed to perform the action.'
  const NOT_FOUND = 'The request resource is not found.'
  const UNEXPECTED_ERROR = 'Oops, an error has occured. Please contact to the administrator for more information.'
  const TIMEOUT = 'Could not connect to the server right now.'
  const TIMEOUT_RETRIABLE = 'Could not connect to the server right now. Retrying in 10 seconds...'

  // @ts-ignore
  $axios.interceptors.response.use(null, (error) => {
    // PRINCIPLE DRY: DO NOT REPEAT YOURSELF
    const code = parseInt(error.response && error.response.status)
    const config = error.config
    const message = UNEXPECTED_ERROR
    // if (code === 401) {
    //   if (app.router?.currentRoute.path.toLowerCase().indexOf('/login') !== -1) {
    //     message = INCORRECT_USER_PASS
    //   } else {
    //     console.log(INSUFFICIENT_PERMISSION)
    //     // tu ban message cua thu vien nhe
    //     // Vue.prototype.$message.error(INSUFFICIENT_PERMISSION)
    //     app.router?.push('/login')
    //     return Promise.reject(error)
    //   }
    // } else if (code === 403 || code === 401) {
    //   // how do we handle FORBIDDEN?
    //   message = INSUFFICIENT_PERMISSION
    // } else if (code === 404) {
    //   // The requested resource cannot be found!
    //   message = NOT_FOUND
    // } else if (code === 502 || code === 504 || error.message.toLowerCase().includes('timeout')) {
    //   // gateway timeout
    //   message = TIMEOUT
    //   const maxRetry = 3
    //   let counter = config.retried_time || 0
    //   if (counter < maxRetry) {
    //     // tu ban message cua thu vien nhe
    //     console.log(TIMEOUT_RETRIABLE)
    //     // Vue.prototype.$message.error(TIMEOUT_RETRIABLE)
    //     counter++
    //     config.retried_time = counter
    //
    //     return new Promise((resolve) => {
    //       delay(() => {
    //         resolve($axios(config))
    //       }, 10000)
    //     })
    //   }
    // } else if (code === 422) {
    //   if (app.router?.currentRoute.path.toLowerCase().indexOf('account/me/password') !== -1) {
    //     message = INCORRECT_CURRENT_PASS
    //   }
    // } else {
    //   // todo: handle code correctly absed on the data
    // }
    // tu ban message cua thu vien nhe
    // console.log(message)
    // Vue.prototype.$message.error(message)
    return Promise.reject(error)
  })

  initializeAxios($axios)
}

export default accessor
