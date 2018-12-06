import { ADD_POINT, POST_ROUTE_REQUEST, POST_ROUTE_SUCCESS, POST_ROUTE_ERROR } from '../actions/route'
import { GET_ROUTES_ERROR } from '../actions/routes'
import { apiCall } from '@/utils/api'

const namespaced = true

const state = { route: [], status: '' }

const getters = {
  isProcessing: state => state.status === 'posting route',
  route: state => state.route
}

const actions = {
  [ADD_POINT]: ({ commit, dispatch }, point) => {
    commit(ADD_POINT, point)
  },
  [POST_ROUTE_REQUEST]: async ({ commit, dispatch }, title) => {
    commit(POST_ROUTE_REQUEST)
    try {
      await apiCall('routes', 'post', { title: title, path: state.route })
      // dispatch('routes/' + ADD_ROUTE, response, { root: true })
      dispatch('routes/GET_ROUTES_REQUEST', null, { root: true })
      commit(POST_ROUTE_SUCCESS)
    } catch (error) {
      commit(GET_ROUTES_ERROR)
      console.log(error)
    }
  }
}

const mutations = {
  [ADD_POINT]: (state, point) => {
    state.route.push(point)
  },
  [POST_ROUTE_REQUEST]: (state) => {
    state.status = 'posting route'
  },
  [POST_ROUTE_SUCCESS]: (state) => {
    state.status = 'post success'
    state.route = []
  },
  [POST_ROUTE_ERROR]: (state) => {
    state.status = 'post error'
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
