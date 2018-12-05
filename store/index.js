import Vue from 'vue'
import Vuex from 'vuex'
import layouts from './modules/layouts'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default () => {
  return new Vuex.Store({
    modules: {
      layouts
    },
    strict: debug
  })
}
