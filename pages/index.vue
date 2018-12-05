<template>
  <div>
    <Map class="map"></Map>
  </div>
</template>

<script>
import Map from '~/components/Map.vue'

export default {
  components: {
    Map
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.map {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>

