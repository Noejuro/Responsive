<template>
    <v-col class="dynamicHeightContainer">
        <v-row justify="center" align="center" class="header">
            Header
        </v-row>
        <v-row justify="center" align="center" class="dynamicRow">
            Row with Dynamic Height
        </v-row>
        <v-row justify="center" align="center" class="footer">
            Footer
        </v-row>
    </v-col>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .dynamicRow {
        flex-grow: 1;
        background-color:lightcoral;
    }
    .header {
        max-height: 100px;
        background-color:cadetblue;
    }
    .footer {
        max-height: 80px;
        background-color:cornflowerblue;
    }
    .dynamicHeightContainer {
        display: flex; 
        flex-flow: column; 
        height: 100%; 
        color: white;
        font-weight: 700;
        font-size: 25px;
    }
</style>