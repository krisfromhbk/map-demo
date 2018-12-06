import Vue from 'vue'
import Vuex from 'vuex'
import layouts from './modules/layouts'
import routes from './modules/routes'
import route from './modules/route'
import commonMap from './modules/common-map'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default () => {
  return new Vuex.Store({
    modules: {
      layouts,
      routes,
      route,
      commonMap
    },
    strict: debug
  })
}
