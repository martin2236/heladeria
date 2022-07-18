<template>
   <div>
        <v-app-bar color="primary" class="" style="position:fixed; bottom:0; width:100%">
         <v-card-text style="height:60px;" class="py-0 d-flex justify-space-around">
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
      
   </div>
</template>

<script>
export default {
    name:'BottomTab',
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style>


</style>