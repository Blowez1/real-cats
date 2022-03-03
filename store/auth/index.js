import Toastify from 'toastify-js'

export const state = () => ({
  loggedIn: false,
  user: null,
  token: null,
})

export const actions = {
  async login({
    commit
  }, user) {

    const res = this.$AuthService.login(user)

    const {
      status
    } = res

    if (status === 'success') {

      const newUser = {
        name: res.user.name,
        username: res.user.username,
        email: res.user.email,
      }

      commit('SET_USER', newUser)
      commit('SET_TOKEN', res.user.token)

      Toastify({
        text: 'Success you are logged in',
        duration: 2000,
        backgroundColor: 'linear-gradient(to right, #003c95, #003c95)'
      }).showToast();

      setTimeout(await this.$router.push('/'), 2000);

    } else {

      Toastify({
        text: 'Incorrect username or password',
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
      }).showToast();

    }

  },
  logout({
    commit
  }) {
    commit('LOGOUT')
    this.$AuthService.logout();
    this.$router.push('/login')
  },
  fetchUser({
    commit,
    dispatch
  }, token) {
    const res = this.$AuthService.fetchUser(token)

    const {
      status
    } = res

    if (status === 'success') {

      const newUser = {
        name: res.user.name,
        username: res.user.username,
        email: res.user.email,
      }

      commit('SET_USER', newUser)
      commit('SET_TOKEN', res.user.token)

    } else {
      dispatch('logout')
    }
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.loggedIn = true
    state.user = user
  },
  LOGOUT(state) {
    state.loggedIn = false
    state.user = null
  },
  SET_TOKEN(state, token) {
    state.token = token,
      state.loggedIn = true
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.loggedIn
  }
}
