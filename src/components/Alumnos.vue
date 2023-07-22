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
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon color="blue darken-1">
              <v-icon
                medium
                @click="
                  (dialog_inscripciones = true),
                    ($store.state.pk_estudiante = item.id),
                    ($store.state.pk_carrera = item.carrera_id),
                    ($store.state.apellido_nombre = item.apellido_nombre),
                    obtener_materias()
                "
              >
                mdi-clipboard-text
              </v-icon>
            </v-btn>
          </template>
          <span>Asigna materias</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="dialog_inscripciones"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark :color="$store.state.color">
              <v-btn icon dark @click="dialog_inscripciones = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title
                >Asigna materias al estudiante:
                {{ $store.state.apellido_nombre }}</v-toolbar-title
              >
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-divider></v-divider>
            <v-list three-line subheader>
              <br />
              <v-card class="mx-auto" width="1200" elevation="3" outlined>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-autocomplete
                        style="margin-top: 10px"
                        label="Materias"
                        :items="materias"
                        item-text="nombre"
                        item-value="id"
                        v-model="editedItem_Notas.materia_id"
                        @change="
                          anio_carrera = datosMateria(
                            editedItem_Notas.materia_id
                          )
                        "
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col md="3" v-if="anio_carrera != ''">
                      <p style="margin-top: 30px">
                        <b>Pertenece a {{ anio_carrera }} ° año</b>
                      </p></v-col
                    >
                    <v-col cols="12" md="5">
                      <v-btn
                        v-if="anio_carrera != ''"
                        block
                        style="margin-top: 20px"
                        outlined
                        :color="$store.state.color"
                        dark
                        @click="insertar_inscripciones()"
                      >
                        Asignar materia
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-list>
            <v-card class="mx-auto" width="1200">
              <v-text-field
                v-if="notas === ''"
                color="purple darken-4"
                loading
                disabled
              ></v-text-field>
              <v-data-table
                :headers="headers2"
                :items="notas"
                sort-by="nombre"
                class="elevation-1"
                :search="search"
              >
                <template v-slot:top>
                  <v-toolbar flat :color="$store.state.color">
                    <v-toolbar-title>Notas</v-toolbar-title>

                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                      label="Buscar (Por Materia)"
                      class="mx-2"
                    ></v-text-field>

                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog_notas" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          outlined
                          color="black"
                          dark
                          class="mb-2"
                          v-on="on"
                          >Nueva nota</v-btn
                        >
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">{{ formTitlenotas }}</span>
                        </v-card-title>

                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                  v-model="editedItem_Notas.parcial_1"
                                  label="Parcial 1"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                  v-model="editedItem_Notas.parcial_2"
                                  label="Parcial 2"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                  v-model="editedItem_Notas.parcial_3"
                                  label="Parcial 3"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                  v-model="editedItem_Notas.parcial_4"
                                  label="Parcial 4"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                  v-model="editedItem_Notas.final"
                                  label="Final"
                                  type="number"
                                ></v-text-field>
                              </v-col>
                              
                            </v-row>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog_notas = false"
                            >Cancelar</v-btn
                          >
                          <v-btn color="blue darken-1" text @click="guardar_nota(),dialog_notas = false"
                            >Guardar</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" icon color="green">
                        <v-icon medium class="mr-2" @click="editItemNotas(item)">
                            mdi-table-edit
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Insertar nota</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" icon color="red darken-1">
                        <v-icon medium @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
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
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog_notas: false,
    dialog_inscripciones: false,
    formas_aprobacion: ["Examen final", "Promocinal"],
    carreras: [],
    materias: [],
    emailRules: [
      (v) => !!v || "E-mail es requiredo",
      (v) => /.+@.+/.test(v) || "E-mail debe ser valido",
    ],
    nameRules: [
      (v) => !!v || "Nombre de campo requerido",
      (v) => (v && v.length <= 150) || "Nombre campo requerido",
    ],
    pk_nota:'',
    pk: "",
    dialog: false,
    search: "",
    notas: [],
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
    headers2: [
      { text: "Año", value: "anio_carrera" },
      { text: "Materia", value: "nombre" },
      { text: "Parcial 1", value: "parcial_1" },
      { text: "Parcial 2", value: "parcial_2" },
      { text: "Parcial 3", value: "parcial_3" },
      { text: "Parcial 4", value: "parcial_4" },
      { text: "Final", value: "final" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    anio_carrera: "",
    alumnos: [],
    editedIndex: -1,
    editedIndex_nota: -1,
    editedItem_Notas: {
      parcial_1: "0",
      parcial_2: "0",
      parcial_3: "0",
      parcial_4: "0",
      final: "0",
    },
    defaultItem_Notas: {
      parcial_1: "0",
      parcial_2: "0",
      parcial_3: "0",
      parcial_4: "0",
      final: "0",
    },
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
    formTitlenotas() {
      return this.editedIndex2 === -1 ? "Nueva nota" : "Edita estudiante";
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
  
    insertar_nota(pk) {
      var  obj = this
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        opcion: "insertar",
        inscripcion_id: pk,
        parcial1:  this.editedItem_Notas.parcial_1,
        parcial2:  this.editedItem_Notas.parcial_2,
        parcial3:  this.editedItem_Notas.parcial_3,
        parcial4:  this.editedItem_Notas.parcial_4,
        final:  this.editedItem_Notas.final
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var promise = Promise.race([
        fetch(`${this.$store.state.url_api}notas.php`, requestOptions).then(
          (response) => response.json()
        ),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 520000)
        ),
      ]);

      promise.then((result) => console.log(result)),
      promise.then( obj.notas_x_estudiante()),
     // promise.then((result) => obj.swal_get(result))
        promise.catch((error) => console.log(error));
        setTimeout(() =>{this.notas_x_estudiante()},3000)
    },
    notas_x_estudiante() {
      var obj = this;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        opcion: "obtenerNotasPorEstudiante",
        estudiante_id: obj.$store.state.pk_estudiante,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      //
      fetch(`${this.$store.state.url_api}notas.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (obj.notas = result))
        .catch((error) => console.log("error", error));
    },
    insertar_inscripciones() {
      var obj = this;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        opcion: "insertar",
        id_estudiante: this.$store.state.pk_estudiante,
        id_materia: this.editedItem_Notas.materia_id,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var promise = Promise.race([
        fetch(
          `${this.$store.state.url_api}inscripciones.php`,
          requestOptions
        ).then((response) => response.json()),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 520000)
        ),
      ]);

      promise.then((result) => obj.insertar_nota(result))
        promise.then((result) => console.log(result))
       // promise.then((result) => obj.swal_get(result))
        promise.catch((error) => console.log(error));
    },
    datosMateria(materiaId) {
      const materiaEncontrada = this.materias.find(
        (materia) => materia.id === materiaId
      );
      return materiaEncontrada.anio_carrera || null;
    },

    obtener_materias() {
      var obj = this;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        opcion: "obtenerMateriaPorCarrera",
        carrera_id: obj.$store.state.pk_carrera,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      //
      fetch(`${this.$store.state.url_api}materias.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (obj.materias = result))
        .catch((error) => console.log("error", error));
      this.notas_x_estudiante();
    },
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
      fetch(`${this.$store.state.url_api}estudiantes.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => (this.alumnos = result))
        .catch((error) => console.log("error", error));
    },
    guardar_nota(){
        this.insertar_nota(this.pk_nota) 
    },
    editItemNotas(item)
    {
      console.log(item);
      this.pk_nota = item.inscripcion_id;

      this.editedIndex_nota = this.alumnos.indexOf(item);
      this.editedItem_Notas= Object.assign({}, item);
      this.dialog_notas = true;
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
        var obj= this
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
          `${this.$store.state.url_api}estudiantes.php`,
          requestOptions
        ).then((response) => response.text()),
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 520000)
        ),
      ]);

      promise.then((result) => console.log(result)),
      promise.then(obj.actualiza()),
        promise.catch((error) => console.log(error));
      
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
            `${this.$store.state.url_api}estudiantes.php`,
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result))
        promise.then( obj.actualiza())
        promise.then((result) => obj.swal_put(result)),
        promise.catch((error) => console.log(error));
       
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
            `${this.$store.state.url_api}estudiantes.php`,
            requestOptions
          ).then((response) => response.text()),
          new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Timeout")), 520000)
          ),
        ]);

        promise.then((result) => console.log(result))
        promise.then( obj.initialize())
          promise.then((result) => obj.swal_get(result))
          promise.catch((error) => console.log(error));
        this.actualiza();
      }
      this.close();
    },
  },
};
</script>
<style></style>
