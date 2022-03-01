import Cookie from 'cookie'

export const state = () => ({
  loggedIn: false,
  user: null,
  token: null
})

export const actions = {
  login({
    commit
  }) {

    const user = {
      username: 'yengec',
      password: 'yengec'
    }

    const res = this.$AuthService.login(user)
    const {
      status
    } = res

    if (status === 'success') {
      commit('LOGIN_SUCCESS', res.user)
    }
  },
  setToken({
    commit
  }, token) {
    if (token === null) {
      commit('LOGOUT');
    } else {
      commit('SET_TOKEN', token)
    }
  }
}

export const mutations = {
  LOGIN_SUCCESS(state, user) {
    state.loggedIn = true
    state.user = user
    state.token = user.token
  },
  LOGOUT(state) {
    state.loggedIn = false
    state.user = null
    state.token = null
  },
  SET_TOKEN(state, token) {
    state.token = token
    state.loggedIn = true
  }
}

export const getters = {
    isAuthenticated(state) {
        return state.loggedIn
    }
}
