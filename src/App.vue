<template>
  <v-app>
      <nav-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <bottom-tab class="bottomTab"/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import BottomTab from './components/BottomTab.vue'
export default {
  components: { NavBar, BottomTab },
  name: 'App',
};
</script>
 <style lang="css" >
 #app{
     background-color: aliceblue;
 }
    
.ubicacion{
    font-size: 15px;
}
 @media (min-width: 413px) { 
       
        .bottomTab{
            display: none;
        }
    }
 
    @media (max-width: 413px) { 
        .titulo{
            display: none;
        }
     }
    
</style>