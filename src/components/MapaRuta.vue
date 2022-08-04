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
const waypoints = new Array();
export default {
  data: {
    waypoints: [],
  },
  mounted() {
    var map = L.map("map");
    var LeafIcon = L.Icon.extend({
      options: {
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      },
    });
    var greenIcon = new LeafIcon({
      iconUrl: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
      shadowUrl: "http://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      icon: greenIcon,
    }).addTo(map);

    console.log(sessionStorage.lat + "" + sessionStorage.lng);
    var router = L.Routing.control({
      waypoints: [
        L.latLng(sessionStorage.lat, sessionStorage.lng), //hasta
        L.latLng(-36.49543124960607, -56.700707674026496), // desde
      ],
      language: "es",
      routeWhileDragging: true,
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "green", opacity: 1, weight: 5 }],
      },

      
    }).addTo(map);
 
        let puntos = new Array();
        puntos.push({ lat: sessionStorage.lat, lng: sessionStorage.lng });
        puntos.push({ lat: -36.98797, lng: -56.545454 });
        for (var i = 0; i < 2; i++) {
          const marker = L.marker([puntos[i].lat, puntos[i].lng], {
            draggable: true,
            bounceOnAdd: false,
            bounceOnAddOptions: {
              duration: 1000,
              height: 800,
              function() {
                bindPopup(myPopup).openOn(map);
              },
            },
            
            icon: L.icon({
              iconUrl: "https://i.ibb.co/2MNpX1P/APACHE.png",
              iconSize: [38, 95],
              iconAnchor: [22, 94],
              popupAnchor: [-3, -76],
              // shadowUrl: 'https://i.ibb.co/hX91BZW/luminaria-Antigua.jpg',
              //  shadowSize: [68, 95],
              shadowAnchor: [22, 94],
            }),

          }).addTo(map);

      
        }
      
    // https://i.ibb.co/2MNpX1P/APACHE.png
    // https://i.ibb.co/s6fdypV/taxi.png
    const photoImgFrom =
      '<img src="https://i.ibb.co/gSx4w53/LANCHE.jpg" height="150px" width="150px alt="LANCHE" border="0">';
    L.marker([sessionStorage.lat, sessionStorage.lng])
      .addTo(map)
      .bindPopup(L.popup({}).setContent("<b>Desde!</b><br />." + photoImgFrom))
      .openPopup(true);
    //  C:\MAMP\htdocs\heladeria-1\src/assets/bolas.jpg
    var photoImg =
      '<img src="https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg" height="150px" width="150px"/>';
    L.marker([-36.49543124960607, -56.700707674026496])
      .addTo(map)
      .bindPopup("<b>Hasta</b><br />" + photoImg)
      .openPopup(true);
  },
};
</script>
//-36.49543124960607, "longitud": -56.700707674026496
<style>
.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
:root {
  --color-primary: peru;
  --logo: url(https://s.cdpn.io/profiles/user/1490182/80.jpg?1538125571);
}

.leaflet-popup-content {
  padding: 0.5rem;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  min-width: 200px;
  font-size: 0.9rem;
  font-family: inherit;
}

.leaflet-container a.leaflet-popup-close-button {
  padding: 0.8rem;
  z-index: 1;
}
</style>
