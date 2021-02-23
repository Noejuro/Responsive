<template>
    <v-col>
        <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="(index, item) in items" :key="index">
                <v-card outlined shaped color="#738678" height="150px">
                    <v-col style="height: 100%">
                        <v-row class="ma-0 card-content" justify="center" align="center" >
                            {{item}}
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']
        }
    }
}
</script>

<style scoped>
    .card-content {
        height: 100%; 
        color: white;
        font-size: 30px;
        font-weight: 700;
    }
</style>