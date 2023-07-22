<template>
  <v-card class="mx-auto" width="1200">
    <v-text-field
      v-if="carreras === ''"
      color="purple darken-4"
      loading
      disabled
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="carreras"
      sort-by="nombre"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat :color="$store.state.color">
          <v-toolbar-title>carreras</v-toolbar-title>

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
                >Nueva fucultad</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.nombre"
                          label="Nombre"
                          :rules="nameRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          offset-x
                          min-width="290px"
                          label="Ingrese Fecha"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.fecha_apertura"
                              label="Fecha apertura"
                              prepend-icon="mdi-calendar"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.fecha_apertura"
                            :active-picker.sync="activePicker"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancelar
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="
                                (menu = false),
                                  $refs.menu.save(editedItem.fecha_apertura)
                              "
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-autocomplete
                          style="margin-top: 10px"
                          label="Facultad"
                          :items="facultades"
                          item-text="nombre_facultad"
                          item-value="id_facultad"
                          v-model="editedItem.id_facultad"
                        >
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-autocomplete
                          style="margin-top: 10px"
                          label="Años de duración"
                          :items="anios"
                          v-model="editedItem.anios_cursada"
                        >
                        </v-autocomplete>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.descripcion"
                          label="Descripcíon"
                        ></v-textarea>
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
    anios: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    facultades: [],
    nameRules: [
      (v) => !!v || "Nombre de campo requerido",
      (v) => (v && v.length <= 150) || "Nombre campo requerido",
    ],
    menu: false,
    datte: "",
    pk: "",
    dialog: false,
    search: "",
    headers: [
      { text: "Nombre", value: "nombre" },
      { text: "Fecha de apertura", value: "fecha_apertura" },
      { text: "Facultas", value: "nombre_facultad" },
      { text: "Años de cursada", value: "anios_cursada" },
      { text: "Acciones", value: "actions", sortable: false },
    ],

    carreras: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      descripcion: "",
      logico: "",
      fecha_apertura: "",
      id_facultad: "",
      anios_cursada: "",
    },
    defaultItem: {
      nombre: "",
      descripcion: "",
      logico: "",
      fecha_apertura: "",
      id_facultad: "",
      anios_cursada: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva carrera" : "Edita carrera";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
    this.get_facultades();
  },
  mounted() {},

  methods: {
    get_facultades() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        opcion: "obtener",
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      //
      fetch(
        `${this.$store.state.url_api}facultades.php`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (this.facultades = result))
        .catch((error) => console.log("error", error));
    },
    initialize() {
      var requestOptions = {
        method: "GET",

        redirect: "follow",
      };
      //
      fetch(`${this.$store.state.url_api}carreras.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (this.carreras = result))
        .catch((error) => console.log("error", error));
      this.get_facultades();
    },

    editItem(item) {
      console.log(item);
      this.pk = item.id;

      this.editedIndex = this.carreras.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    actualiza() {
      setTimeout(() => {
        this.initialize;
      }, 2000);
    },
    deleteItem(item) {
      const index = this.carreras.indexOf(item);
      confirm("Esta seguro de eliminar este item?") &&
        this.carreras.splice(index, 1);

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
          `${this.$store.state.url_api}carreras.php`,
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
          descripcion: this.editedItem.descripcion,
          logico: "0",
          fecha_apertura: this.editedItem.fecha_apertura,
          id_facultad: this.editedItem.id_facultad,
          anios_cursada: this.editedItem.anios_cursada,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            `${this.$store.state.url_api}carreras.php`,
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
          descripcion: this.editedItem.descripcion,
          logico: "0",
          fecha_apertura: this.editedItem.fecha_apertura,
          id_facultad: this.editedItem.id_facultad,
          anios_cursada: this.editedItem.anios_cursada,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        var promise = Promise.race([
          fetch(
            `${this.$store.state.url_api}carreras.php`,
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
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style></style>
