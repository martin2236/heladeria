<template>
  <v-app>
    <div id="map" class="map"></div>
  </v-app>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/leaflet.markercluster.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.2.3/leaflet.draw.js"></script>
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet-src.js"></script>
<script>
import L from "leaflet";

export default {
    data: {
    waypoints:[]
    },
  mounted() {
    var map = L.map("map");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    var router = L.Routing.control({
      waypoints: [L.latLng(sessionStorage.lng, sessionStorage.lat), L.latLng(-34.57, -58.42)],
      language: "es",
      routeWhileDragging: true,
    }).addTo(map);
  },
};
</script>

<style>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>