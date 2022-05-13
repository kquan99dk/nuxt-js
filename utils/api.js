/* eslint-disable */
import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios = null

export function initializeAxios (axiosInstance) {
   $axios = axiosInstance
}

export { $axios }
