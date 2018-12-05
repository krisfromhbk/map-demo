<template>
  <v-layout justify-space-between row fill-height>
    <div style="width: 50%">
      <div class="ma-3">
        <h3>Маршруты:</h3>
      <v-list class="ma-4">
        <v-list-tile> aga </v-list-tile>
        <v-divider/>
        <v-list-tile> aga </v-list-tile>
      </v-list>
      </div>
    </div>
    <div style="width: 50%; z-index: 1;">
      <Map/>
    </div>
  </v-layout>
</template>

<script>
import Map from '~/components/Map'

export default {
  components: {
    Map
  }
}
</script>

<style scoped>

</style>

