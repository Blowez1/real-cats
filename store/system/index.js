export const state = () => ({
  toggle: false,
})

export const actions = {
  toggle({
    commit
  }) {
    commit('TOGGLE')
  }
}

export const mutations = {
  TOGGLE(state) {
    state.toggle = !state.toggle
  }
}


export const getters = {
  checkToggle(state) {
    return state.toggle ? 'active' : ''
  }
}
