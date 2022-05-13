import {
  getToken
} from '@/utils/constant/auth'
import { AUTH } from '@/utils/constant/mutation-types'

export default function ({ store, req, redirect, route }) {
  // If nuxt generate, pass this middleware
  const loggedToken = getToken()
  if (loggedToken) {
    store.commit(`auth/${AUTH.SET_TOKEN}`, loggedToken)
  } else {
    // logout/invalid token case
    // store.commit(`auth/${AUTH.REMOVE_TOKEN}`);
  }
  console.log(')))))))))))))))))', route)
}
