<template>
<v-app>
  <div  id="app">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer
        :url="osmUrl"
        :attribution="attribution"/>
      <l-routing-machine :language="language" :waypoints="waypoints"/>
    </l-map>
     <br><br><br>
   
  </div>
   <input v-model="latitud"/>
     <input v-model="longitud"/>
       <button @click="guarda">Guarda</button>
     <button @click="abre">Abre</button>
    
    <Mapa v-if="bandera"> </Mapa>
    </v-app>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'
import LRoutingMachine from './components/LRoutingMachine'
import Mapa from './components/MapaRuta'
const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export default {
  components: { LMap, LTileLayer, LRoutingMachine, Mapa },
  data () {
    return {
      latitud:0,
      longitud:0,
      bandera:false,
      zoom: 6,
      center: { lat:-36.72, lng: -57.2304153 },
      osmUrl,
      attribution,
      language: 'es', 
      waypoints: [
        { lat: -36.736056, lng: -56.7404153 },
        { lat: -36.736056, lng: -56.731281 }
      ]
    }
  },
  mounted() {
      
  },
  methods:{
      guarda(){
       sessionStorage.removeItem('lat')
       sessionStorage.removeItem('lng')
         alert(sessionStorage.lat)
              sessionStorage.lat=this.latitud
              sessionStorage.lng=-this.longitud
               alert(sessionStorage.lat)
      },
      abre(){
            this.bandera= true
      }
     
     
  }
}

</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

html, body, #app {
  height: 100%;
  margin: 0;
}
</style>