<template>
  <v-form ref="form" v-model="valid" lazy-validation class="ml-5 mr-5 mb-2">
    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="Название"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      Добавить
    </v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
import { POST_ROUTE_REQUEST } from '~/store/actions/route'

export default {
  data () {
    return {
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Требуется название'
      ]
    }
  },
  methods: {
    ...mapActions('route', [POST_ROUTE_REQUEST]),
    submit () {
      if (this.$refs.form.validate()) {
        this.POST_ROUTE_REQUEST(this.title)
      }
    }
  }
}
</script>

<style>

</style>
