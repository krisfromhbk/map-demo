<template>
  <div style="height: 100%">
    <no-ssr>
      <l-map :zoom=12 :center="center" :options="mapOptions" @click="addMarker">
        <l-control-zoom :position="zoomPosition"/>
        <l-tile-layer url="http://80.240.31.97/tile/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="item in markers" :key="item.id" :lat-lng="item.latlng" @l-add="$event.target.openPopup()">
          <l-popup>{{ item.latlng }}</l-popup>
        </l-marker>
        <l-geo-json :geojson="geojson"/>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { ADD_POINT } from '@/store/actions/route'

export default {
  data () {
    return {
      center: [59.93863, 30.31413],
      mapOptions: { zoomControl: false },
      zoomPosition: 'bottomright',
      counter: 0,
      markers: [],
      geojson: {
        'type': 'Feature',
        'geometry': {
          'type': 'MultiLineString',
          'coordinates': [[]]
        }
      }
    }
  },
  computed: {
    ...mapState('route', ['route'])
  },
  watch: {
    route (route) {
      if (route.length === 0) {
        this.markers = []
        this.counter = 0
        // this.geojson.geometry.coordinates[0] = []
        this.geojson = {
          'type': 'Feature',
          'geometry': {
            'type': 'MultiLineString',
            'coordinates': [[]]
          }
        }
      }
    }
  },
  methods: {
    ...mapActions('route', [ADD_POINT]),
    addMarker (event) {
      this.ADD_POINT(event.latlng)
      let point = [event.latlng.lng, event.latlng.lat]
      this.geojson.geometry.coordinates[0].push(point)
      this.counter++
      this.markers.push({ id: this.counter, latlng: event.latlng })
    }
  }
}
</script>

<style>

</style>
