// import { Vue } from "vue-property-decorator";
//
// export const getToken = () => {
//   return localStorage.getItem("Access-Token");
// };
//
// export const getUserInfo = () => {
//   let userInfo = localStorage.getItem("User");
//   if (userInfo) {
//     return JSON.parse(userInfo);
//   }
// };
import Vue from 'vue'

export const notify = (
  type,
  message,
  description,
  duration = 4.5
) => {
  const notification = Vue.prototype.$notification
  const option = {
    message,
    description,
    duration,
    placement: 'bottomRight'
  }
  switch (type) {
    case 'success':
      notification.success(option)
      break
    case 'warning':
      notification.warning(option)
      break
    case 'error':
      notification.error(option)
      break
    case 'info':
      notification.info(option)
      break
    case 'warn':
      notification.warn(option)
      break
    default:
      notification.open(option)
      break
  }
}
