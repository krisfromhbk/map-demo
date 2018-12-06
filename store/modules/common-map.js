const namespaced = true

const state = { busses: [] }

const getters = {
  test: state => state.busses.filter(el => el.model)
}

const mutations = {
  'SET_BUSSES': (state, busses) => {
    state.busses = busses
  },
  'UPDATE_BUS': (state, id) => {
    state.busses.find(el => el._id === id).model = !state.busses.find(el => el._id === id).model
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations
}
