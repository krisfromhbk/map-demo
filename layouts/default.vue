<template>
  <v-app>
    <div class="overlay">
      <section>
        <div class="ma-5">
          <v-speed-dial
            class=""
            v-model="fab"
            :top="top"
            :bottom="bottom"
            :right="right"
            :left="left"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
          >
            <v-btn
              slot="activator"
              v-model="fab"
              color="blue darken-2"
              dark
              fab
            >
              <v-icon>menu</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
            <div class="ml-5">
              <v-btn
                class="ml-5"
                fab
                dark
                small
                color="green"
                @click="test"
              >
                <v-icon>directions_bus</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn
                fab
                dark
                small
                color="red"
                @click="test"
              >
                <v-icon>near_me</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn
                router
                to="/dispatcher"
                fab
                dark
                small
                color="pink"
              >
                <v-icon>person</v-icon>
              </v-btn>
            </div>
          </v-speed-dial>
        </div>
      </section>
    </div>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Картишка', to: '/' }
        ],
        miniVariant: false,
        rightDrawer: false,
        title: 'Vuetify.js',
        direction: 'right',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-x-transition'
      }
    },
    methods: {
      test () {
        alert('gg')
      }
    }
  }
</script>

<style>
.overlay {
  position: absolute;
  
  z-index: 2;
  /* margin-left: 50px; */
  width: 100px;
  /* top: -5px; */
}
</style>

