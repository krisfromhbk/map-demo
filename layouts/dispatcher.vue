<template>
  <div style="height: 100%">
    <v-toolbar class="overlay" dense app>
      <v-toolbar-title>GEOMI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="back()">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="height: 100%" class="test">
      <nuxt />
    </v-content>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$store.commit('layouts/SET_LAYOUT', 'common')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.overlay {
  position: absolute;
  
  z-index: 2;
}
/* .test {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
} */
</style>

