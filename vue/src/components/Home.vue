<template>
  <v-container fill-height fluid>
    <v-row class="text-center" align="center">
      <!-- <v-col cols="12">
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
      </v-col> -->

      <v-col>
        <v-card>
          <v-card-title>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col>
                <v-select 
                  label="Select Category" 
                  :items="['name', 'calories', 'fat', 'carbs', 'protein', 'iron']"
                  v-model="category"
                ></v-select>
              </v-col>
              
            
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="filteredItems"
            item-key="name"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        category: 'name',
        search: '',
        calories: '',
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
        headers: [
          { text: 'Dessert (100g serving)', align: 'start', sortable: false, value: 'name'},
          { text: 'Calories', value: 'calories', },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ]
      }
    },
    computed: {
      
      filteredItems () {
        return this.desserts.filter(element => element[this.category].toString().toUpperCase().includes(this.search.toUpperCase()));
      },
    },
  }
</script>
