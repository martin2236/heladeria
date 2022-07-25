<template>
   <div>
        <v-app-bar color="primary" class="" style="position:fixed; bottom:0; width:100%">
         <v-card-text style="height:60px; width:100%;" class="py-0 d-flex justify-space-between mx-auto">
             <v-btn to="heladerias" text color="primary" class="white--text px-0 ml-n2">
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
              <v-btn @click="dialog = true" text color="primary" class="white--text px-1 mr-n2">
                 <div style="display:flex; flex-direction:column; margin-top:35px;">
                  <v-icon class="white--text">
                     mdi-cart-variant
                 </v-icon>
                 <p class="white--text">Carrito</p>
                 </div>
             </v-btn>
         </v-card-text>
           
     </v-app-bar>
       <v-dialog
        transition="dialog-bottom-transition"
        max-width="90%"
        v-model="dialog"
      >
      
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Hola usuario, este es tu pedido</v-toolbar>
            <v-card-text>
              <v-card class="d-flex flex-row" v-for="item in pedido" :key="item.id">
                 <v-col
                    cols="3"
                 >
                     <div >
                        <v-img
                        :src="require(`../assets/pedidos/` + item.imagen)"
                        class="imagen-filtro"
                        height="55"
                        width="55"
                        style="border-radius:50%;"
                    ></v-img>
                 </div>
                 </v-col>
                <v-col
                    cols="6"
                >
                    <v-card-title style="font-size:16px;">{{item.producto}}</v-card-title>
                </v-col>
              <v-col
                cols="3"
              >
                    <v-card-actions class="d-flex flex-column">
                    <v-btn small class="pa-0 ma-0">-</v-btn>
                    <v-text-field class="ma-0 pa-0" :v-model="item.cantidad"></v-text-field>
                    <v-btn small class="pa-0 ma-0">+</v-btn>
                </v-card-actions>
              </v-col>
              </v-card>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
     
      <div style="height:40px">

      </div>
      
   </div>
</template>

<script>
export default {
    name:'BottomTab',
    data: () => ({
        dialog:false,
      drawer: false,
      group: null,
      pedido:[
            {
            id:1,
            imagen:'h-chocolate.png',
            producto:'H. chocolate X 1kg',
            cantidad:1,
            precio:500
        },
        {
            id:2,
            imagen:'h-vainilla.png',
            producto:'H. vainilla X 1kg',
            cantidad:1,
            precio:500
        },
        {
            id:3,
            imagen:'h-frutilla.png',
            producto:'H. frutilla X 1kg',
            cantidad:1,
            precio:500
        }
      ]
    }),
}
</script>

<style>


</style>