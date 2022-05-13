import * as actionTypes from '../utils/constant/action-types'
import * as APIs from '../utils/constant/endpoints'
import * as mutationTypes from '../utils/constant/mutation-types'
import { removeToken, setToken } from '@/utils/constant/auth'
import { RESPONSE_SUCCESS } from '@/utils/constant/config'
import { notify } from '@/utils/constant/helpers'

/**
 * initial state
 */
const state = () => ({
  token: null,
  // access_token: null,
  me: null
})

/**
 * initial getters
 */
const getters = {
  isAuthenticated (state, getters, rootState) {
    console.log(state.token, !!state.token)
    return !!state.token
  },
  token (state) {
    return state.token
  },
  nameMe (state) {
    console.log('state.me', state.me)
    return state.me ? state.me.name : ''
  },
  infoMe (state) {
    return state.me
  }
}

/**
 * initial actions
 */
const actions = {
  async [actionTypes.AUTH.LOGIN] ({ commit, dispatch }, payload) {
    console.log(1121, payload)

    const { data } = await this.$axios.post(APIs.LOGIN, payload)
    if (data.code === RESPONSE_SUCCESS) {
      commit(mutationTypes.AUTH.SET_TOKEN, data.data.access_token)
      if (data.data.update_info === 0) {
        // get api ME
        dispatch(actionTypes.AUTH.ME)
      }
    }
    return data
  },
  async [actionTypes.AUTH.LOGIN_FB] ({ commit, dispatch }, payload) {
    console.log(555, payload)

    const { data } = await this.$axios.post(APIs.LOGIN_FB, payload)
    if (data.code === RESPONSE_SUCCESS) {
      commit(mutationTypes.AUTH.SET_TOKEN, data.data.access_token)

      if (data.data.update_info === 0) {
        // get api ME
        dispatch(actionTypes.AUTH.ME)
      }
    }
    return data
  },
  async [actionTypes.AUTH.LOGIN_GG] ({ commit, dispatch }, payload) {
    console.log(666, payload)

    const { data } = await this.$axios.post(APIs.LOGIN_GG, payload)
    if (data.code === RESPONSE_SUCCESS) {
      commit(mutationTypes.AUTH.SET_TOKEN, data.data.access_token)
      if (data.data.update_info === 0) {
        // get api ME
        dispatch(actionTypes.AUTH.ME)
      }
    }
    return data
  },
  // async [actionTypes.AUTH.LOGIN_2FA]({ commit, dispatch }, payload) {
  //   const { data } = await this.$axios.post(APIs.LOGIN_2FA, payload);
  //   console.log("[AUTH.LOGIN_2FA]", data, payload);
  //
  //   if (data.code == RESPONSE_SUCCESS) {
  //     commit(mutationTypes.AUTH.SET_TOKEN, data.data);
  //     commit(mutationTypes.AUTH.SET_ACCESS_TOKEN, data.data.access_token);
  //   }
  //   return data;
  // },

  async [actionTypes.AUTH.ME] ({ commit }, payload) {
    const { data } = await this.$axios.get(APIs.ME, payload)
    console.log('[AUTH.ME]', data, payload)

    if (data.code === RESPONSE_SUCCESS) {
      commit(mutationTypes.AUTH.SET_ME, data.data)
    }
    return data
  },
  //
  // async [actionTypes.AUTH.REGISTER]({ commit }, payload) {
  //   const { data } = await this.$axios.post(APIs.REGISTER, payload);
  //   return data;
  // },
  //
  async [actionTypes.AUTH.LOGOUT] ({ commit }) {
    commit(mutationTypes.AUTH.REMOVE_TOKEN)
    // const { data } = await this.$axios.post(APIs.LOGOUT, payload);
    return true
  }
}

/**
 * initial mutations
 */
const mutations = {
  [mutationTypes.AUTH.SET_TOKEN] (state, data) {
    console.log('[SET_TOKEN] token 1', data)
    state.token = data
    console.log('[SET_TOKEN] token 2', state.token)

    setToken(state.token)
  },

  // [mutationTypes.AUTH.SET_ACCESS_TOKEN](state, access_token) {
  //   state.access_token = access_token;
  //   setAccessToken(access_token);
  // },

  [mutationTypes.AUTH.REMOVE_TOKEN] (state) {
    state.token = null
    // state.access_token = null;
    removeToken()
  },

  [mutationTypes.AUTH.SET_ME] (state, _data) {
    state.me = _data
    if (!(_data.name &&
      _data.email &&
      _data.phone &&
      _data.province_id &&
      _data.address)) {
      if (window.location.pathname !== '/auth/updateInfo') {
        window.location.href = '/auth/updateInfo'
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
