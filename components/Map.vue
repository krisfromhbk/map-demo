<template>
  <div style="height: 100%">
    <no-ssr>
      <l-map :zoom=12 :center="center" :options="mapOptions">
        <l-control-zoom :position="zoomPosition"/>
        <l-tile-layer url="http://80.240.31.97/tile/{z}/{x}/{y}.png"></l-tile-layer>
        <l-geo-json :geojson="geojson"/>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      center: [59.93863, 30.31413],
      mapOptions: { zoomControl: false },
      zoomPosition: 'bottomright',
      counter: 0,
      markers: [],
      geojson: {
        'type': 'FeatureCollection',
        'features': []
      }
    }
  },
  computed: {
    ...mapGetters('commonMap', ['test'])
  },
  watch: {
    test (busses) {
      if (busses.length === 0) {
        console.log('aga')
        this.geojson = {
          'type': 'FeatureCollection',
          'features': []
        }
      } else {
        this.geojson = {
          'type': 'FeatureCollection',
          'features': []
        }
        busses.forEach(el => {
          let localPath = []
          el.path.forEach(element => localPath.push([element.lng, element.lat]))
          console.log(localPath)
          this.geojson.features.push({
            'type': 'Feature',
            'geometry': {
              'type': 'MultiLineString',
              'coordinates': [
                localPath
              ]
            }
          })
        })
      }
    }
  },
  methods: {
    addMarker (event) {
      this.counter += 1
      this.markers.push({ id: this.counter, latlng: event.latlng })
      console.log(event.latlng)
    }
  }
}
</script>
