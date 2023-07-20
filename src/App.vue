<template>
  <v-app>
    <v-app-bar
      app
      :color="$store.state.color"
      dark
    >
       <h1>Ing. Jorge E. Peralta</h1>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
