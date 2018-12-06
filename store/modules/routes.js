import { GET_ROUTES_REQUEST, GET_ROUTES_SUCCESS, GET_ROUTES_ERROR, ADD_ROUTE } from '../actions/routes'
import { apiCall } from '@/utils/api'

const namespaced = true

const state = { routes: '', status: '' }

const getters = {
  isProcessing: state => state.status === 'getting routes',
  aga: state => state.routes
}

const actions = {
  [GET_ROUTES_REQUEST]: async ({ commit, dispatch }) => {
    commit(GET_ROUTES_REQUEST)
    try {
      let response = await apiCall('routes', 'get')
      commit(GET_ROUTES_SUCCESS, response)
    } catch (error) {
      commit(GET_ROUTES_ERROR)
      console.log(error)
    }
  },
  [ADD_ROUTE]: ({ commit, dispatch }, route) => {
    commit(ADD_ROUTE)
  }
}

const mutations = {
  [GET_ROUTES_REQUEST]: (state) => {
    state.status = 'getting routes'
    state.routes = ''
  },
  [GET_ROUTES_SUCCESS]: (state, response) => {
    state.status = 'get success'
    state.routes = response
  },
  [GET_ROUTES_ERROR]: (state) => {
    state.status = 'get error'
  },
  [ADD_ROUTE]: (state, route) => {
    state.routes.push(route)
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
