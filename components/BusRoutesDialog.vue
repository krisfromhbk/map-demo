<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">Маршруты</v-card-title>

      <v-card-text>
        тут типа список с маршрутами + чекбоксы
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="ok()"
        >
          Отмена
        </v-btn>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="ok()"
        >
          Го некст
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'dialog'
  ],
  methods: {
    ok () {
      this.$emit('my-event')
    }
  }
}
</script>

<style>

</style>
