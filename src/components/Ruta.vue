<template>
  <div id="app">
    <l-map  :zoom="zoom" :center="center">
      <l-tile-layer :url="osmUrl" :attribution="attribution" />
      <l-routing-machine  :waypoints="waypoints" />
    </l-map>
    <v-btn @click="buscaRuta">Buscar Ruta</v-btn>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import LRoutingMachine from "./LRoutingMachine.vue";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
const attribution =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const  waypoints= []
export default {
  components: { LMap, LTileLayer, LRoutingMachine },
  data() {
    return {
      abreMapa: false,  
      zoom: 10,
      center: [-36.4882488, -56.7050737],
      osmUrl,
      attribution,
      waypoints: [
        { lat: -36.5, lng: -56.8 },
        { lat: -36.7, lng: -56.7 },
      ],
    };
  },
  mounted() {
    this. buscaRuta()
  },
  methods: {
    buscaRuta() {
      console.log(this.$store.state.coordenadasUsuario[0].latitud);
      console.log(this.waypoints);
      this.waypoints = [];
      console.log(this.waypoints);
      this.waypoints.push(
        {
          lat: this.$store.state.coordenadasUsuario[0].latitud,
          lng: this.$store.state.coordenadasUsuario[0].longitud,
        },
        { lat: -56.512, lng: -36.511 }
      );
      console.log(this.waypoints);
      this.abreMapa= true
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 800px;

  margin: 0;
}
</style>

<!-- <template>
    <div id="mapa"></div>
</template>

<script>

export default {
    
  mounted(){
    
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var mymap = L.map('mapa', {
                center: [latitude, longitude],
                zoom: 12
            });

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 25,
                attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
                id: 'mapbox/streets-v11'
            }).addTo(mymap);

            L.Routing.control({
                waypoints: [
                    L.latLng(latitude, longitude),
                    L.latLng(37.17059, -3.60552)
                ],
                language: 'es'
            }).addTo(mymap);
        });
    }
    else{
        var mymap = L.map('mapa', {
            center: [37.17059, -3.60552],
            zoom: 17
        });

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 25,
            attribution: 'Datos del mapa de &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imágenes © <a href="https://www.mapbox.com/">Mapbox</a>', 
            id: 'mapbox/streets-v11'
        }).addTo(mymap);
    }
  }
}
</script>

<style>
 #mapa{
            height: 600px;
        }
</style> -->
