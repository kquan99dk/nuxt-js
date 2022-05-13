import BaseApi from '../apiService'

const UserApi = {
  async login (payload) {
    const res = await BaseApi.post(
      '/account/login', payload,
      {
        decompress: true,
        headers: {
          'X-Request-StackTrace': true
        }
      }
    )
    return res.data
  }
}
export default UserApi
