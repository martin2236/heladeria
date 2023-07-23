<template>
  <v-card class="mx-auto" width="1200">
    <v-text-field
      v-if="materias === ''"
      color="purple darken-4"
      loading
      disabled
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="materias"
      sort-by="nombre"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat :color="$store.state.color">
          <v-toolbar-title>Materias</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Buscar (POR NOMBRE)"
            class="mx-2"
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn outlined color="black" dark class="mb-2" v-on="on"
                >Nueva materia</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre"
                          :rules="nameRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.horas_cursada"
                          label="Horas de cursada"
                          type="number"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-autocomplete
                          style="margin-top: 10px"
                          label="Forma de aprobacion"
                          :items="formas_aprobacion"
                          v-model="editedItem.forma_aprobacion"
                        >
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-autocomplete
                          style="margin-top: 10px"
                          label="Carrera"
                          :items="carreras"
                          item-text="nombre"
                          item-value="id"
                          v-model="editedItem.carrera_id"
                        >
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.anio_carrera"
                          label="Año de carrera"
                          type="number"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon color="green">
              <v-icon medium class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
          <span>Editar</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon color="red darken-1">
              <v-icon medium @click="deleteItem(item)"> mdi-delete </v-icon>
            </v-btn>
          </template>
          <span>Eliminar</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    formas_aprobacion: ["Examen final", "Promocinal"],
    carreras: [],
    nameRules: [
      (v) => !!v || "Nombre de campo requerido",
      (v) => (v && v.length <= 150) || "Nombre campo requerido",
    ],

    pk: "",
    dialog: false,
    search: "",
    headers: [
      { text: "Nombre", value: "nombre" },
      { text: "Horas cursada", value: "horas_cursada" },
      { text: "Forma de aprobacion", value: "forma_aprobacion" },
      { text: "Carrera", value: "nombre_carrera" },
      { text: "Año carrera", value: "anio_carrera" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    materias: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      horas_cursada: "",
      forma_aprobacion: "",
      carrera_id: "",
      anio_carrera: "",
    },
    defaultItem: {
      nombre: "",
      horas_cursada: "",
      forma_aprobacion: "",
      carrera_id: "",
      anio_carrera: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva materia" : "Edita materia";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },
  mounted() {
    this.get_carreras();
  },

  methods: {
    get_carreras() {
      var requestOptions = {
        method: "GET",

        redirect: "follow",
      };
      //
      fetch(`${this.$store.state.url_api}carreras.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (this.carreras = result))
        .catch((error) => console.log("error", error));
    },
    initialize() {
      var requestOptions = {
        method: "GET",

        redirect: "follow",
      };
      //
      fetch(`${this.$store.state.url_api}materias.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (this.materias = result))
        .catch((error) => console.log("error", error));
   
    },

    editItem(item) {
      console.log(item);
      this.pk = item.id;

      this.editedIndex = this.materias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    actualiza() {
      setTimeout(() => {
        this.initialize;
      }, 2000);
    },
    deleteItem(item) {
      const index = this.materias.indexOf(item);
      confirm("Esta seguro de eliminar este item?") &&
        this.materias.splice(index, 1);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        opcion: "eliminar",
        id: item.id,
        logico: 1,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var promise = Promise.race([
        fetch(
          `${this.$store.state.url_api}materias.php`,
          requestOptions
        ).then((response) => response.text()),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 520000)
        ),
      ]);

      promise.then((result) => console.log(result)),
        promise.catch((error) => console.log(error));
      this.actualiza();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    swal_get(resp) {
      var obj = this;
      if (resp) {
        obj.$swal({
          title: "Se almaceno con exito!!",
          text: "",
          icon: "success",
        });
      } else {
        obj.$swal({
          title: "No se almaceno",
          text: "Por favor vuelva a intentarlo, verique el campo",
          icon: "warning",
        });
      }
    },
    swal_put(resp) {
      var obj = this;
      if (resp) {
        obj.$swal({
          title: "Se edito con exito!!",
          text: "",
          icon: "success",
        });
      } else {
        obj.$swal({
          title: "No se edito",
          text: "Por favor vuelva a intentarlo, verique el campo",
          icon: "warning",
        });
      }
    },
    save() {
      if (this.editedIndex > -1) {
        var obj = this;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          opcion: "actualizar",
          id: this.pk,
          nombre: this.editedItem.nombre,
          horasCursada: this.editedItem.horas_cursada,
          logico: "0",
          formaAprobacion: this.editedItem.forma_aprobacion,
          carreraId: this.editedItem.carrera_id,
          anio_carrera: this.editedItem.anio_carrera,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            `${this.$store.state.url_api}materias.php`,
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result), obj.initialize()),
          promise.then((result) => obj.swal_put(result)),
          promise.catch((error) => console.log(error));
        this.actualiza();
      } else {
        var obj = this;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          opcion: "insertar",
          nombre: this.editedItem.nombre,
          horasCursada: this.editedItem.horas_cursada,
          logico: "0",
          formaAprobacion: this.editedItem.forma_aprobacion,
          carreraId: this.editedItem.carrera_id,
          anio_carrera: this.editedItem.anio_carrera,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            `${this.$store.state.url_api}materias.php`,
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result), obj.initialize()),
          promise.then((result) => obj.swal_get(result)),
          promise.catch((error) => console.log(error));
        this.actualiza();
      }
      this.close();
      setTimeout(() => {
        this.initialize();
      }, 4000);
    },
  
  },
};
</script>
<style></style>
