<template>
  <v-app id="inspire">
    <v-card>
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
      >
        <v-app-bar-title>Title</v-app-bar-title>
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px">
          <br />
          <br />
          <br />
          <br />
          <br /><br />
          <template>
            <v-card>
              <v-list
                v-for="(icono, index) of iconos"
                :key="index"
                flat
                subheader
                three-line
              >
                <v-subheader>{{ icono.titulo }}</v-subheader>

                <v-list-item-group v-model="settings" multiple active-class="">
                  <v-list-item>
                    <template v-slot:default="{}">
                      <v-list-item-action>
                        <v-checkbox></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-row
                          ><v-col cols="3" md="2">
                            <template>
                              <v-img
                                height="50px"
                                width="50px"
                                :src="icono.name"
                              ></v-img> </template></v-col
                          ><v-col cols="9" md="8"><v-textarea label="Rutina"></v-textarea></v-col
                        ></v-row>

                        <v-list-item-title></v-list-item-title>
                      
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </template>
        </v-container>
      </v-sheet>
      <v-divider></v-divider>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    iconos: [
      {
        id: 1,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/aga.png",
      },
      {
        id: 2,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/correr-50.png ",
      },
      {
        id: 3,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/crossfit-60.png",
      },
      {
        id: 4,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/empujar-50.png",
      },
      {
        id: 5,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/entarse-60.png",
      },
      {
        id: 6,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/gimnasia-50.png",
      },
      {
        id: 7,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/gimnasia-64.png",
      },
      {
        id: 8,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/hilado-60.png",
      },
      {
        id: 9,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/hombros.png",
      },
      {
        id: 10,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/icons89.png",
      },
      {
        id: 11,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/icons8banca.png",
      },
      {
        id: 12,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/icons8banca50.png",
      },
      {
        id: 13,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/icons8-mancuerna-rizos-50.png",
      },
      {
        id: 14,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/kisspng.png",
      },
      {
        id: 15,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/kisspng-weight-.png",
      },
      {
        id: 16,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/lagartijas.png",
      },
      {
        id: 17,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/lagartijas-50.png",
      },
      {
        id: 18,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/mancuernas-60.png",
      },
      {
        id: 19,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pesa-50.png",
      },
      {
        id: 20,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pilates-50.png",
      },
      {
        id: 21,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pngeg.png",
      },
      {
        id: 22,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pngegg.png",
      },
      {
        id: 23,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pngegg2.png",
      },
      {
        id: 24,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pngegg6.png",
      },
      {
        id: 25,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pngegg9.png",
      },
      {
        id: 26,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/press.png",
      },
      {
        id: 27,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/pullups-50.png",
      },
      {
        id: 28,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/que-eleva-los-pies-60.png",
      },
      {
        id: 29,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/remo-50.png",
      },
      {
        id: 30,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/remo-80.png",
      },
      {
        id: 31,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/ropes-50.png",
      },
      {
        id: 32,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/sentadillas-50.png",
      },
      {
        id: 33,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/skipping-rope-50.png",
      },
      {
        id: 34,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/sobre-cabeza-50.png",
      },
      {
        id: 35,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/stretching-.png",
      },
      {
        id: 36,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/stretching-hamstring-50.png",
      },
      {
        id: 37,
        name: "http://jorgeperalta-001-site2.itempurl.com/iconos/transparent.png",
      },
    ],
  }),
};
</script>

<style>
</style>