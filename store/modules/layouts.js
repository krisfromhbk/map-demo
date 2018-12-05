const namespaced = true

const state = { layout: localStorage.getItem('layout') || 'common' }

const getters = {
  layout: state => state.layout
}

const mutations = {
  SET_LAYOUT (state, payload) {
    state.layout = payload
  }
}

export default {
  namespaced,
  getters,
  mutations,
  state
}
