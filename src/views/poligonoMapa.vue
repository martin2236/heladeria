<template>
<v-container>
    <v-row>
        <v-col md="12">
  
  <div class="container">
    <l-map
      ref="map"
      class="map-container "
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
      @click="addMarker"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-draw-toolbar position="topright"></l-draw-toolbar>
     </l-map>
    <div>zoom: {{zoom}}, center: {{center}} , coordenadas {{coordenadas}}</div>
  </div>
 
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import LDrawToolbar from "vue2-leaflet-draw-toolbar";
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";
export default {
  components: { LMap, LTileLayer, LDrawToolbar },
  data() {
    return {
      marcadores:[],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 10,
      center: [-36.4882488, -56.7050737],
      bounds: null,
      coordenadas: [],
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
     addMarker(event) {
      this.marcadores = [];
      this.marcadores.push({ pos: event.latlng, desc: "" });

       console.log(this.marcadores);
       this.coordenadas.push({latitud:this.marcadores[0].pos.lat, longitud:this.marcadores[0].pos.lng})
  
    },
  }
};
</script>

<style>
@import "~leaflet/dist/leaflet.css";
.container {
 height: 100%;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
     -ms-flex-direction: column;
         flex-direction: column;
}
.map-container {
  height: 100%;
  /* Fallback for vmin */
  padding: 0px 1rem 1rem 1rem;
  padding: 0px 1vmin 1vmin 1vmin;
}

</style>
