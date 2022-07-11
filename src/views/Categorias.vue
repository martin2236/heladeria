<template>
  <v-app id="inspire">
    <h1>Categorias</h1>
    <v-container id="inspire">
      <v-row>
        <v-col md="6">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="700">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
                ></v-img>

                <v-card-text>
                  <h2 class="text-h6 primary--text">Magento Forests</h2>
                  Travel to the best outdoor experience on planet Earth. A
                  vacation you will never forget!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="green">
                    <v-btn>See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover></v-col
        >
        <v-col md="6">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card class="mx-auto" max-width="700">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
                ></v-img>

                <v-card-text>
                  <h2 class="text-h6 primary--text">Magento Forests</h2>
                  Travel to the best outdoor experience on planet Earth. A
                  vacation you will never forget!
                </v-card-text>

                <v-card-title>
                  <v-rating
                    :value="4"
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    class="mr-2"
                  ></v-rating>
                  <span class="primary--text text-subtitle-2">64 Reviews</span>
                </v-card-title>

                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="green">
                    <v-btn  @click="mostrarUbicacion()">Mostrar ubicacion</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover></v-col
        >
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data: () =>({
      latitud:0,
      longitud:0,
      coordenadas:[]

    }),
    created(){
        navigator.geolocation.getCurrentPosition((data) => this.coordenadas= data, (err) => console.error(err))
    },
    methods:{
        mostrarUbicacion(){
           
            this.latitud= this.coordenadas.coords.latitude
            this.longitud= this.coordenadas.coords.longitude
             console.log(this.latitud + " " + this.longitud + " " )
        }
    }
};
</script>

<style>
</style>