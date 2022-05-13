/* eslint-disable */

import UserApi from '~/utils/apis/userApi'
const UsersServiceHandler = (api, store) => {
  const getInfo = () => {
    return store.list
  }
  return {
    getInfo
  }
}
export default (context, inject) => {
  const api = UserApi
  // const storeProfile = context.store
  const handler = UsersServiceHandler(api, {list: 1})
  inject('usersServices', handler)
}
