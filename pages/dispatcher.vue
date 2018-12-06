<template>
  <v-layout justify-space-between row fill-height>
    <div style="width: 50%">
      <div class="ma-3">
        <h3>Маршруты:</h3>
        <v-expansion-panel popout class="mt-3">
          <v-expansion-panel-content
            v-for="item in compiledRoutes"
            :key="item._id"
          >
            <div slot="header">{{ item.title }}</div>
            <v-card>
              <v-card-text>Тупо инфа про маршрут.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content expand-icon="add">
            <div slot="header">Добавить маршрут</div>
            <v-card>
              <add-route-form/>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </div>
    <div style="width: 50%; z-index: 1;">
      <MapDispatcher/>
    </div>
  </v-layout>
</template>

<script>
import MapDispatcher from '~/components/MapDispatcher'
import AddRouteForm from '~/components/AddRouteForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    MapDispatcher,
    AddRouteForm
  },
  data () {
    return {
      compiledRoutes: [],
      compiledRoute: []
    }
  },
  computed: {
    ...mapGetters('routes', ['aga']),
    ...mapGetters('route', ['route'])
  },
  created () {
    this.cookRoutes(this.aga)
  },
  watch: {
    aga (routes) {
      this.cookRoutes(routes)
    },
    route (route) {
      this.cookRoute(route)
    }
  },
  methods: {
    cookRoutes (routes) {
      let localRoutes = []
      var i
      for (i = 0; i < routes.length; i++) {
        let el = { title: routes[i].title, path: routes[i].path, _id: routes[i]._id, model: false }
        localRoutes.push(el)
      }
      this.compiledRoutes = localRoutes
    },
    cookRoute (route) {
      let localRoute = []
      var i
      for (i = 0; i < route.length; i++) {
        let el = { id: i, point: route[i] }
        localRoute.push(el)
      }
      this.compiledRoute = localRoute
    },
    invertModel (id) {
      this.compiledRoutes.find(el => el._id === id).model = !this.compiledRoutes.find(el => el._id === id).model
    }
  }
}
</script>

<style scoped>

</style>

