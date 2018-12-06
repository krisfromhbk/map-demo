<template>
  <div style="height: 100%">
    <no-ssr>
      <l-map :zoom=12 :center="center" :options="mapOptions" @click="addMarker">
        <l-control-zoom :position="zoomPosition"/>
        <l-tile-layer url="http://80.240.31.97/tile/{z}/{x}/{y}.png"></l-tile-layer>
        <!-- <l-geo-json
          v-show="show"
          :geojson="geojson"
        /> -->
        <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng" @l-add="$event.target.openPopup()">
          <l-popup>{{ marker.latlng }}</l-popup>
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: [59.93863, 30.31413],
      mapOptions: { zoomControl: false },
      zoomPosition: 'bottomright',
      counter: 0,
      markers: [],
      show: true,
      geojson:
      {
        'type': 'Feature',
        'geometry': {
          'type': 'MultiLineString',
          'coordinates': [
            [
              [30.30640840530396, 59.94229835368874],
              [30.31207323074341, 59.938579494534515],
              [30.312459468841556, 59.93834302117901],
              [30.31265258789063, 59.93798830798394],
              [30.312566757202152, 59.93773033236808],
              [30.312416553497314, 59.93745085651962],
              [30.312459468841556, 59.937192876722875],
              [30.31260967254639, 59.93708538454859],
              [30.312952995300297, 59.9370208890768],
              [30.3138542175293, 59.936924145633895],
              [30.31887531280518, 59.93634367905008]
            ]
          ]
        }
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
