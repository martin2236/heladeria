<template>
  <v-app id="inspire">
    <v-main class="black">
      <v-img width="1600" src="../assets/super2.png">
        <v-container >
          <v-row>
            <v-col cols="2">
              <v-sheet :color="$store.state.color" rounded="lg">
                <v-list color="transparent">
                  <v-list-item v-for="n in pantallas" :key="n" link>
                    <v-list-item-content>
                      <v-list-item-title @click="eleccion = n.pantalla">
                        {{ n.pantalla }}
                        <v-icon @click="eleccion = n.pantalla">{{
                          n.icon
                        }}</v-icon>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item link color="grey lighten-4">
                    <v-list-item-content>
                      <v-list-item-title> Refresh </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col cols="10">
              <alumnos v-if="eleccion == 'Alumnos'"></alumnos>
              <facultades v-if="eleccion == 'Facultades'"></facultades>
              <carreras v-if="eleccion == 'Carreras'"></carreras>
              <materias v-if="eleccion == 'Materias'"></materias>
              <inscripciones v-if="eleccion == 'Inscripciones'"></inscripciones>
              <notas v-if="eleccion == 'Notas'"></notas>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-main>
  </v-app>
</template>

<script>
import alumnos from "./Alumnos.vue";
import facultades from "./Facultades";
import carreras from "./Carreras";
import materias from "./Materias";
import inscripciones from "./Inscripciones";
import notas from "./Notas";
export default {
  components: {
    alumnos,
    facultades,
    carreras,
    materias,
    inscripciones,
    notas,
  },
  data: () => ({
    eleccion: "",
    pantallas: [
      { pantalla: "Alumnos", icon: "mdi-copyright"},
      { pantalla: "Carreras", icon: "mdi-copyright" },
      { pantalla: "Facultades", icon: "mdi-hamburger" },
      { pantalla: "Inscripciones", icon: "mdi-barcode-scan" },
      { pantalla: "Materias", icon: "mdi-file" },
      { pantalla: "Notas", icon: "mdi-account-multiple-minus" },
    ],
  
  }),
  mounted() {

  },


};
</script>
