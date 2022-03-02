import Toastify from 'toastify-js'

export const state = () => ({
  loggedIn: false,
  user: null
})

export const actions = {
  async login({ commit }, user) {

    const res = this.$AuthService.login(user)
    const { status } = res

    if (status === 'success') {
      commit('LOGIN_SUCCESS', res.user)
      Toastify({
        text: 'Success you are logged in',
        duration: 2000,
        backgroundColor: 'linear-gradient(to right, #003c95, #003c95)'
      }).showToast();

      setTimeout(await this.$router.push('/') , 2000);
      
    }else {
      Toastify({
        text: 'Incorrect username or password',
        duration: 3000,
        backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
      }).showToast();
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
