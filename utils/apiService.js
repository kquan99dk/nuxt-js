import { $axios } from '~/utils/api'

const BaseApi = {
  // constructor (store) {
  //   this.store = store
  // }

  /**
   * Send the GET HTTP request
   * @param resource
   * @param _header
   * @returns {*}
   */
  get (resource, _header) {
    return $axios.get(resource, _header)
  },

  /**
   * Send the POST HTTP request
   * @param resource
   * @param _header
   * @param data
   * @returns {*}
   */
  post (resource, data, _header) {
    return $axios.post(resource, data, _header)
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param _header
   * @param data
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put (resource, data, _header) {
    return $axios.put(resource, data, _header)
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @param _header
   * @returns {*}
   */
  delete (resource, _header) {
    return $axios.delete(resource, _header)
  }
}
export default BaseApi
