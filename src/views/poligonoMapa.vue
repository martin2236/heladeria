<template>
<v-app> 
    <div id="map" style="height: 570px; width: 100%"></div>
 
</v-app>

         
  
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/leaflet.markercluster.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.2.3/leaflet.draw.js"></script>
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet-src.js"></script>
<script>

export default {


 mounted() {
     
    var cont = 0;
    localStorage.cont = cont;
    var urlcalle = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var urlsatelite =
      "//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

    //draw your marker/circle/polygon/rectangle, the coordinates will be displayed in the console
    var map = L.map("map", {
    fullscreenControl: true,
    // OR
    fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
    }
}).setView([-36.53, -56.7], 10);

    var thunder = L.tileLayer("https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=20303d5f3ecb4dcc910dae86c45b649e", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> Informática',
    });

    var osmBase = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> Informática',
    });
    osmBase.addTo(map);
     var dark=L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      layers: "Satelite",

      attribution:
        '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Informática</a>',
    });
    var Satelite = L.tileLayer(urlsatelite, {
      layers: "Satelite",

      attribution:
        '<a href="https://www.sedecatastro.gob.es/"" target="_blank">Informática</a>',
    });
    var baseMaps = {
      Calle: osmBase,
      Satelite: Satelite,
      Dark:dark,
      Thunder:thunder,
    };
    L.control.layers(baseMaps, {}).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
    });

    map.addControl(drawControl);
    var coordenadasinsertar=new Array();
    var coordenadas =JSON.parse( localStorage.coordenadaspadre );

    console.log( JSON.parse( localStorage.coordenadaspadre ))

    var markerClusters = L.markerClusterGroup();
    coordenadas.forEach((element) => {
      console.log(element.lat);
      var marker = L.marker([element.lat, element.lng]);
      //  marker.addTo(map);
      markerClusters.addLayer(marker);
    });
    map.addLayer(markerClusters);

    if(coordenadasinsertar!=null){

    }

    map.on(L.Draw.Event.CREATED, function(e) {
      localStorage.cont = cont;
      cont++;
      console.clear();
      var type = e.layerType;
      var layer = e.layer;
      //  console.log(layer);
      //  console.log(type);
      drawnItems.addLayer(layer);

      area(type, layer);
      // Do whatever else you need to. (save to db, add to map etc)

      console.log("Coordinates:");

      if (type == "marker" || type == "circle" || type == "circlemarker") {
        console.log([layer.getLatLng().lat, layer.getLatLng().lng]);
      } else {
        var objects = layer.getLatLngs()[0];
        for (var i = 0; i < objects.length; i++) {
          console.log([objects[i].lat, objects[i].lng]);
        }
      }
    });

    function area(figura, capa) {
      var miObjeto = new Array();
      if (
        figura != "marker" &&
        figura != "circle" &&
        figura != "circlemarker"
      ) {
        var seeArea = L.GeometryUtil.geodesicArea(capa.getLatLngs()[0]);
        console.log(seeArea);
        localStorage.area = seeArea;
      } else {
        coordenadasinsertar.push({ lat: capa.getLatLng().lat, lng: capa.getLatLng().lng });
        localStorage.insert=(coordenadasinsertar)
        localStorage.setItem("datos", JSON.stringify(miObjeto));
      }

      // Guardo el objeto como un string

      var guardado = localStorage.getItem("datos");

      console.log("objetoObtenido: ", coordenadasinsertar);
    }
    
  },
}
</script>

<style>

</style>