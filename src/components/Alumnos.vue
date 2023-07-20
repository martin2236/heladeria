<template>
  <v-card class="mx-auto" width="1200">
    <v-text-field
      v-if="alumnos === ''"
      color="purple darken-4"
      loading
      disabled
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="alumnos"
      sort-by="nombre"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat :color="$store.state.color">
          <v-toolbar-title>Estudiantes</v-toolbar-title>

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
                >Nuevo estudiante</v-btn
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
                          v-model="editedItem.dni"
                          label="DNI"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.apellido_nombre"
                          label="Nombre y apellido"
                          :rules="nameRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.celular"
                          label="Celular"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.mail"
                          label="Mail"
                          min="1"
                          max="20"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.edad"
                          label="Edad"
                          type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.codigo_postal"
                          label="Codigo postal"
                          type="number"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.domicilio"
                          label="Domicilio"
                          :rules="nameRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-autocomplete
                          label="Carrera"
                          :items="carreras"
                          item-text="nombre"
                          item-value="id"
                          v-model="editedItem.carrera_id"
                        >
                        </v-autocomplete>
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
    emailRules: [
      (v) => !!v || "E-mail es requiredo",
      (v) => /.+@.+/.test(v) || "E-mail debe ser valido",
    ],
    nameRules: [
      (v) => !!v || "Nombre de campo requerido",
      (v) => (v && v.length <= 150) || "Nombre campo requerido",
    ],

    pk: "",
    dialog: false,
    search: "",
    headers: [
      { text: "DNI", value: "dni" },
      { text: "Apellido y nombre", value: "apellido_nombre" },

      { text: "Celular", value: "celular" },
      { text: "Mail", value: "mail" },
      { text: "Edad", value: "edad" },
      { text: "Codigo postal", value: "codigo_postal" },
      { text: "Domicilio", value: "domicilio" },
      { text: "Carrera", value: "carrera_nombre" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    alumnos: [],
    editedIndex: -1,
    editedItem: {
      dni: "",
      apellido_nombre: "",
      celular: "",
      mail: "",
      edad: "",
      codigo_postal: "",
      domicilio: "",
      carrera_id: "",
    },
    defaultItem: {
      dni: "",
      apellido_nombre: "",
      celular: "",
      mail: "",
      edad: "",
      codigo_postal: "",
      domicilio: "",
      carrera_id: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo estudiante" : "Edita estudiante";
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
      fetch("http://localhost/backend_postulacion/carreras.php", requestOptions)
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
      fetch("http://localhost/backend_postulacion/estudiantes.php", requestOptions)
        .then((response) => response.json())
        .then((result) => (this.alumnos = result))
        .catch((error) => console.log("error", error));
    },

    editItem(item) {
      console.log(item);
      this.pk = item.id;

      this.editedIndex = this.alumnos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    actualiza() {
      setTimeout(() => {
        this.initialize;
      }, 3000);
    },
    deleteItem(item) {
      const index = this.alumnos.indexOf(item);
      confirm("Esta seguro de eliminar este item?") &&
        this.alumnos.splice(index, 1);

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
          "http://localhost/backend_postulacion/estudiantes.php",
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
          dni: this.editedItem.dni,
          apellido_nombre: this.editedItem.apellido_nombre,
          celular: this.editedItem.celular,
          mail: this.editedItem.mail,
          edad: this.editedItem.edad,
          codigo_postal: this.editedItem.codigo_postal,
          domicilio: this.editedItem.domicilio,
          logico: "0",
          carrera_id: this.editedItem.carrera_id,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            "http://localhost/backend_postulacion/estudiantes.php",
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
          dni: this.editedItem.dni,
          apellido_nombre: this.editedItem.apellido_nombre,
          celular: this.editedItem.celular,
          mail: this.editedItem.mail,
          edad: this.editedItem.edad,
          codigo_postal: this.editedItem.codigo_postal,
          domicilio: this.editedItem.domicilio,
          logico: "0",
          carrera_id: this.editedItem.carrera_id,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            "http://localhost/backend_postulacion/estudiantes.php",
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
    },
  },
};
</script>
<style></style>
