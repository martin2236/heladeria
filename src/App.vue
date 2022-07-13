<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      fixed
      
    >
    <v-col
       cols="2"
       lg="4"
       md="4"
       sm="4"
        class="d-flex align-center"
    >
         <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="titulo">Helados ya!</v-toolbar-title>
    </v-col>
    <v-col
       cols="8"
       lg="4"
       md="4"
       sm="4"
    >
         <v-text-field 
        class="ml-lg-5 mt-7 pa-0 buscar"
        style="align-self:center"
        placeholder="buscar heladeria"
        append-icon="mdi-magnify"
        @click:append="toggleMarker"
        filled
        rounded
        dense
    ></v-text-field>
    </v-col>
    <v-col
    cols="2"
    lg="4"
    md="4"
    sm="4"
       class="d-flex justify-end"
    >
        <v-btn
      class="mr-n3 mx-lg-2"
      fab
      dark
      small
      color="indigo"
    >
      <v-icon dark>
        mdi-cart
      </v-icon>
    </v-btn>
    </v-col>
    
    <!--<v-btn text class="ubicacion"><v-icon class="ubicacion-icon">mdi-map-marker</v-icon> Ingresar mi ubicación</v-btn>-->
   
   
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      fixed
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Iniciar sesion</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
      drawer: false,
      group: null,
       marker: true,
    }),
    methods:{
         toggleMarker () {
        this.marker = !this.marker
      },
    }
};
</script>
 <style lang="css" >
 #app{
     background-color: aliceblue;
 }
    
.ubicacion{
    font-size: 15px;
}

 
    @media (max-width: 376px) { 
        .titulo{
            display: none;
        }
     }
    
</style>