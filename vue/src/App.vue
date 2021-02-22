<template>
  <v-app>
    <v-navigation-drawer expand-on-hover app dark color="#738678" clipped >
       <v-list nav dense>
          <v-list-item-group v-model="group" color="white">
              <v-list-item @click="$router.push({name: 'Home'})" >
                  <v-list-item-icon>
                      <v-icon>mdi-home-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Principal</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push({name: 'dynamicHeight'})">
                  <v-list-item-icon>
                      <v-icon>mdi-table-row-height</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Altura Dinámica</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push({name: 'dynamicColumns'})" >
                  <v-list-item-icon>
                      <v-icon> mdi-table-column-width</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Columnas Dinámicas</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push({name: 'dynamicDisplay'})" >
                  <v-list-item-icon>
                      <v-icon>mdi-cellphone-link</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Display Dinámico</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push({name: 'overflow'})">
                  <v-list-item-icon>
                      <v-icon>mdi-stack-overflow</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Overflow</v-list-item-title>
              </v-list-item>
              
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#738678" dark clipped-left flat>
      <div class="d-flex align-center text-h4">
        HermesCorp
      </div>
    </v-app-bar>


    <v-main>
        <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      group: null
    }
  }
};
</script>
