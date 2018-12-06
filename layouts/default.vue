<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import Common from './common'
import Dispatcher from './dispatcher'
import { GET_ROUTES_REQUEST } from '@/store/actions/routes'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('layouts', ['layout'])
  },
  methods: {
    ...mapActions('routes', [GET_ROUTES_REQUEST])
  },
  components: {
    'common': Common,
    'dispatcher': Dispatcher
  },
  created () {
    this.GET_ROUTES_REQUEST()
  }
}
</script>

