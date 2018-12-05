<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import Common from './common'
import Dispatcher from './dispatcher'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('layouts', ['layout'])
  },
  components: {
    'common': Common,
    'dispatcher': Dispatcher
  }
}
</script>

