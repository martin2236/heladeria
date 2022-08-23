<template>
   <div>
        <v-app-bar color="primary" class="" style="position:fixed; bottom:0; width:100%">
         <v-card-text style="height:60px;" class="py-0 d-flex justify-space-around">
             <v-btn @click="dialogo = !dialogo" text color="primary" class="white--text px-0 ml-n2">
                <div style="display:flex; flex-direction:column; margin-top:35px;">
                <v-icon class="white--text">
                    mdi-ice-cream
                 </v-icon>
                 <p class="white--text">locales</p>
                </div>
             </v-btn>
             <v-btn text color="primary" to="login" class="white--text px-2">
                 <div style="display:flex; flex-direction:column; margin-top:35px;">
                 <v-icon class="white--text">
                     mdi-account-circle-outline
                 </v-icon>
                 <p class="white--text">perfil</p>
                 </div>
             </v-btn>
             <v-btn color="primary" text class="white--text px-1" to="/">
                 <div style="display:flex; flex-direction:column; margin-top:35px;">
                  <v-icon class="white--text">
                     mdi-home
                 </v-icon>
                 <p class="white--text">inicio</p>
                 </div>
             </v-btn>
               <v-btn to="Chat" text color="primary" class="white--text px-0">
                <div style="display:flex; flex-direction:column; margin-top:35px;">
                <v-icon class="white--text">
                    mdi-chat-outline
                 </v-icon>
                 <p class="white--text">chat</p>
                </div>
             </v-btn>
              <v-btn @click.stop="drawer = !drawer" text color="primary" class="white--text px-1 mr-n2">
                 <div style="display:flex; flex-direction:column; margin-top:35px;">
                  <v-icon class="white--text">
                     mdi-cart-variant
                 </v-icon>
                 <p class="white--text">Carrito</p>
                 </div>
             </v-btn>
         </v-card-text>
         <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      style="z-index:2000000; top:-605px;"
      height="100vh"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     </v-app-bar>
      <div style="height:40px">

      </div>
      <v-row>
         <v-dialog
          v-model="dialogo"
            transition="dialogo"
            max-width="600"
          >
         
          <template >
            <v-card>
              <v-toolbar
                color="primary"
                dark
              >¿Qué tipo de helado estás buscando?</v-toolbar>
              <v-card-text>
                <v-hover class="mt-5" v-slot="{ hover }">
                <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
                >
                <v-img
                    src="../assets/helados.jpg"
                    class="imagen-filtro"
                >
                    <v-expand-transition>
                    <div
                        v-if="hover"
                        class="d-flex flex-column transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
                        style="height: 100%;"
                    >
                        <p style="font-size:20px; text-align:center; font-weight:bold;">
                            Encontra las mejores heladerias del partido de la costa
                        </p>
                        <router-link to="heladerias" style="text-decoration:underline; font-size:20px; color:white;">ver más</router-link>
                    </div>
                    </v-expand-transition>
                </v-img>
                </v-card>
            </v-hover>

               <v-hover class="mt-5" v-slot="{ hover }">
                <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
                >
                <v-img
                    src="../assets/helados-artesanales.jpg"
                    class="imagen-filtro"
                >
                    <v-expand-transition>
                    <div
                        v-if="hover"
                        class="d-flex flex-column transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
                        style="height: 100%;"
                    >
                        <p style="font-size:20px; text-align:center; font-weight:bold; opacity:1;">
                            Encontra las mejores heladerias artesanales del partido de la costa
                        </p>
                       <v-btn text @click="dialogo=!dialogo">
                         <router-link  to="heladerias" style="text-decoration:underline; font-size:20px; color:white;">ver más</router-link>
                       </v-btn>
                    </div>
                    </v-expand-transition>
                </v-img>
                </v-card>
            </v-hover>
              </v-card-text>
               <v-card-actions class="d-flex justify-end">
                  <v-btn text @click="dialogo = !dialogo">
                    cerrar
                  </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-row>
      
   </div>
</template>

<script>
export default {
    name:'BottomTab',
    data: () => ({
      drawer: false,
      group: null,
      dialogo:false
    }),
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}

</style>