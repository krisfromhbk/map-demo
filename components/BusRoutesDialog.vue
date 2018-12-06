<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">Маршруты</v-card-title>

      <v-card-text>
        <v-list>
          <v-list-tile 
            v-for="item in compiledRoutes"
            :key="item._id"
            @click="''"
          >
            <v-list-tile-content @click="updateState(item._id)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-checkbox v-model="item.model"></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="ok()"
        >
          Отмена
        </v-btn>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="next()"
        >
          Го некст
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: [
    'dialog'
  ],
  data () {
    return {
      compiledRoutes: []
    }
  },
  computed: {
    ...mapGetters('routes', ['aga'])
  },
  created () {
    this.cookRoutes(this.aga)
    this.SET_BUSSES(this.compiledRoutes)
  },
  watch: {
    aga (routes) {
      this.cookRoutes(routes)
      this.SET_BUSSES(this.compiledRoutes)
    }
  },
  methods: {
    ...mapMutations('commonMap', ['SET_BUSSES']),
    ...mapMutations('commonMap', ['UPDATE_BUS']),
    ok () {
      this.$emit('my-event')
    },
    next () {
      this.$emit('my-event')
    },
    updateState (id) {
      // this.invertModel(id)
      this.UPDATE_BUS(id)
    },
    cookRoutes (routes) {
      let localRoutes = []
      var i
      for (i = 0; i < routes.length; i++) {
        let el = { title: routes[i].title, path: routes[i].path, _id: routes[i]._id, model: false }
        localRoutes.push(el)
      }
      this.compiledRoutes = localRoutes
    },
    invertModel (id) {
      this.compiledRoutes.find(el => el._id === id).model = !this.compiledRoutes.find(el => el._id === id).model
    }
  }
}
</script>

<style>

</style>
