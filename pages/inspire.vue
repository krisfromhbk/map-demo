<template>
  <div style="height: 100%;">
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <Map/>
  </div>
</template>

<script>
import Map from '~/components/Map.vue'

export default {
  components: {
    Map
  }
}
</script>
