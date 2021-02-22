<template>
    <!-- More info: -->
    <!-- https://vuetifyjs.com/en/styles/display/ -->
    <v-col class="displayContainer">

        <v-row class="header-mobile d-md-none">
            <v-col class="text-center" cols="6">
                <v-icon large style="color: white;"> mdi-menu</v-icon>
            </v-col>
            <v-col class="text-center" cols="6">
                Logo
            </v-col>
            <v-col class="text-center">
                Test User
            </v-col>
        </v-row>

        <v-row align="center" class="header d-none d-md-flex">
            <v-col class="text-center">
                <v-icon large style="color: white;"> mdi-menu</v-icon>
            </v-col>
            <v-col class="text-center">
                HermesCorp
            </v-col>
            <v-col class="text-center">
                Test User
            </v-col>
        </v-row>

    </v-col>
</template>

<script>
export default {
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
        }
    }
}
</script>

<style scoped>
    .header-mobile {
        height: 150px;
        background-color:lightcoral;
    }
    .header {
        height: 100px;
        background-color:cadetblue;
        margin-top: -12px;
    }
    .displayContainer {
        color: white;
        font-weight: 700;
        font-size: 25px;
    }
</style>