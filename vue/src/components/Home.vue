<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Responsividad en Vue con Vuetify
        </h1>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
       
      }
    },
  }
</script>
