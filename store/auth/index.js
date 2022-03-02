export const state = () => ({
  loggedIn: true,
  user: null
})

export const actions = {
  login({ commit }) {

    const res = this.$AuthService.login(user)
    const { status } = res

    if (status === 'success') {
      commit('LOGIN_SUCCESS', res.user)
    }

  },
  logout({ commit }) {
    commit('LOGOUT')
    this.$router.push('/login')
  }
}

export const mutations = {
  LOGIN_SUCCESS(state, user) {
    state.loggedIn = true
    state.user = user
  },
  LOGOUT(state) {
    state.loggedIn = false
    state.user = null
  },
}

export const getters = {
    isAuthenticated(state) {
        return state.loggedIn
    }
}
