import {getToken, setToken, removeToken} from '@/utils/token'
import {getUserName, setUserName, removeUser} from '@/utils/user'
import {login} from '@/api/user'

const state = {
  token: getToken(),
  username: getUserName()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_NAME: (state, username) => {
    state.username = username
    setUserName(username)
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password}).then(response => {
        // const {data} = response
        commit('SET_TOKEN', 'token')
        commit('SET_NAME', username.trim())
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout ({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_NAME', '')
    removeToken()
    removeUser()
    return new Promise(resolve => resolve())
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
