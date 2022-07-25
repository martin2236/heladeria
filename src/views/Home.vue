<template>
 <div>
     <v-card 
     width="100%" 
     color="primary" 
     class="mt-5 d-flex flex-column align-center justify-center" height="80vh">
         <v-card-title class="mt-8 text-center" style="font-size:30px; color:#ffffff; text-align:center;">
            <p> No esperes más pedí tus <span style="font-size:40px; font-weight:bold; margin-left:7px;"> Helados ya!</span></p>
        </v-card-title>
         <v-text-field
            class="mt-8"
            prepend-inner-icon="mdi-map-marker"
            placeholder="seleccione una ubicacion"
            background-color="white"	
            outlined
         ></v-text-field>
           <v-card-text class="d-lg-flex d-md-flex d-sm-flex flex-lg-row mb-10" >
                <v-col
                class="text-center"
             cols="12"
             lg="7"
             md="6"
             sm="6"
             >
                 <v-btn
                 class="ml-lg-15 mr-lg-n16"
                 color="white"
                    text
                    small
                 >
                     <v-icon small class="mr-2">mdi-map-marker-down</v-icon>
                     Usar ubicación actual
                 </v-btn>
             </v-col>
             <v-col
             class="text-center text-lg-start text-md-start text-sm-start pl-0"
            cols="12"
            lg="4"
            md="6"
            sm="6"
             >
                <v-btn
                class="px-0 text-center ml-lg-n16"
                 color="white"
                    text
                    small
                 >
                     Iniciar sesion 
                 </v-btn>
                 <span style="font-size:14px; color:#fff;"> y ver ubicaciones previas</span>
             </v-col>
           </v-card-text>
     </v-card>
     <v-card class="mt-5 responsive">
         <v-card-title>
             Que estás buscando hoy?
         </v-card-title>
         <v-card-text class="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-row  flex-sm-column">
          <v-col
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
              <v-hover v-slot="{ hover }">
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
                        <router-link to="" style="text-decoration:underline; font-size:20px;">ver más</router-link>
                    </div>
                    </v-expand-transition>
                </v-img>
                </v-card>
            </v-hover>
          </v-col>
          <v-col
          class="mb-5"
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
              <v-hover v-slot="{ hover }">
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
                        <router-link to="" style="text-decoration:underline; font-size:20px;">ver más</router-link>
                    </div>
                    </v-expand-transition>
                </v-img>
                </v-card>
            </v-hover>
          </v-col>
         </v-card-text>
     </v-card >
     <v-card class="mt-5" >
         <v-card-title class=" text-center">Tu postre fácil y rápido</v-card-title>
         <v-card-title class="ml-lg-15 mb-15 titulo-2" >
             Aprovechá mejor tu tiempo y disfrutá de tus 
             <span class="logo-centro" style="margin-left:7px;color:#1976D2; font-wight:900; font-size:60px;">Helados ya!</span>
             </v-card-title>
         <v-card-text class="d-lg-flex d-md-flex d-sm-flex flex-lg-row mt-5">
             <v-col class="text-center">
                    <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/easy.png"
                    height="100"
                    width="100"
                    ></v-img> 
              
                    <h4 class="mt-5">titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse itaque sequi ullam velit! Voluptates aliquam dolor quo eaque quas!</p>
             </v-col>
               <v-col class="text-center">
                    <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/fast.png"
                    height="100"
                    width="100"
                    ></v-img> 
              
                    <h4 class="mt-5">titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse itaque sequi ullam velit! Voluptates aliquam dolor quo eaque quas!</p>
             </v-col>
               <v-col class="text-center mb-15">
                    <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/ofertas.png"
                    height="100"
                    width="100"
                    ></v-img> 
              
                    <h4 class="mt-5">titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse itaque sequi ullam velit! Voluptates aliquam dolor quo eaque quas!</p>
             </v-col>
         </v-card-text>
     </v-card>
     <v-card class="mt-5 responsive">
         <v-col class="d-flex flex-row justify-space-between align-center">
            <v-card-title class="ml-n3">
                Heladerias mas visitadas
            </v-card-title>
            <v-btn
            small
            text
            class="mx-0 px-0 mr-lg-5"
            color="primary"
            to="heladerias"
            >
                ver más
            </v-btn>
         </v-col>
         <v-card-text>
             <v-sheet
                class="mx-0 px-0"
            >
                <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                >
                <v-slide-item
                    v-for="(n,id) in heladerias"
                    :key="id"
                    v-slot="{ active, toggle }"
                >
                    <v-card
                    :color="active ? undefined : 'white'"
                    class="ma-4"
                    height="300"
                    width="200"
                    @click="toggle"
                    >
                    <v-img
                    :src="require(`../assets/heladerias/` + n.src)"
                    height="200"
                    width="200"
                    ></v-img>
                    <h4 class="text-center">{{n.titulo}}</h4>
                    <p class="text-center">{{n.ubicacion}}</p>
                    <p class="text-center">lun a dom - 9pm a 4am</p>
                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
         </v-card-text>
     </v-card>
     <v-card class="mt-5 d-flex flex-column">
         <v-card-title>
             Algunos de nuestros clientes
         </v-card-title>
         <v-card-text class="mt-10 align-self-center d-flex flex-row flex-wrap justify-space-around logos-centro">
             <v-col
            cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/grido.jpg"
                    height="90"
                    width="90"
                    ></v-img> 
             </v-col>
             <v-col
             cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/frahel.jpeg"
                    height="90"
                    width="90"
                    ></v-img> 
             </v-col>
             <v-col
             cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/morato.png"
                    height="90"
                    width="90"
                    ></v-img> 
             </v-col>
             <v-col
                cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/prego.png"
                    height="100"
                    width="100"
                    ></v-img> 
             </v-col>
             <v-col
                cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/sei-tu.jpg"
                    height="100"
                    width="100"
                    ></v-img> 
             </v-col>
             <v-col
                cols="4"
             >
                  <v-img
                    class="mx-auto rounded-circle"
                    src="../assets/logos/vanshelato.jpg"
                    height="100"
                    width="100"
                    ></v-img> 
             </v-col>
         </v-card-text>
     </v-card>
     <v-card class="mt-5" color="primary">
         <v-card-title class="white--text">
             Que opinan de nosotros?
         </v-card-title>
         <v-card-title class="ml-lg-15 mb-10 titulo-2 white--text" >
             Testimonios de personas que utilizan
             <span class="logo-centro" style="margin-left:7px;color:#fff; font-wight:900; font-size:60px;">Helados ya!</span>
             </v-card-title>
         <v-card-text>
              <v-sheet
                class="mx-0 px-0"
                color="primary"
                
            >
                <v-slide-group
                v-model="model"
                class="py-4 px-0"
                active-class="success"
                >
                <v-slide-item
                    v-for="t in 15"
                    :key="t"
                    v-slot="{ active }"
                >
                    <v-card
                    :color="active ? undefined : 'white'"
                    class="mx-5 mt-10"
                    height="200"
                    width="340"
                    >
                    <v-img
                    class="rounded-circle"
                    style="position:absolute; top:-40px;margin-left: auto; margin-right: auto;left: 0;right: 0;"
                    src="../assets/persona.jpg"
                    height="80"
                    width="80"
                    ></v-img>
                    <p class="text-center" style="margin-top:60px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolore pariatur nesciunt, repellendus accusantium quibusdam harum quas vitae sit aspernatur?</p>
                    <h4 class="text-center">Iron Man</h4>
                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
         </v-card-text>
     </v-card>
     <v-card class="mt-5">
         <v-card-title class="">Querés formar parte?</v-card-title>
         <v-card-text class="mt-lg-10  d-lg-flex d-md-flex d-sm-flex flex-lg-row ">
             <v-col 
             cols="12"
             lg="5"
             md="5"
             sm="5"
             >
            <v-img
                class="mt-lg-5 ml-lg-15 mb-lg-10"
                height="250"
                width="370"
                src="../assets/heladeria2.jpg"
                >
                </v-img>
             </v-col>
             <v-col
             cols="12"
             lg="7"
             md="7"
             sm="7"
             class="d-flex flex-column align-center "
             >
                <h2 class="text-center mt-5" style="font-size:40px; line-height:40px;">Vos también podés ser miembro de Helados ya!</h2>
                <h4 class="text-center mt-5">Registra tu heladería y empeza a sumar clientes</h4>
                <v-btn class="mt-5" color="primary">Quiero ser miembro</v-btn>
             </v-col>
         </v-card-text>
     </v-card>
     
        <bottom-tab class="bottomTab"/>
    </div>
</template>

<script>
import BottomTab from '../components/BottomTab.vue'
export default {
components:{
    BottomTab
},
 data: () => ({
      model: null,
      heladerias:[
        {   
            id:'1',
            titulo:'Sabores',
            src:'hela1.jpg',
            ubicacion:'San clemanente'
        },
        {
          id:'2',
          titulo:'Bufala',
          src:'bufala.jpg',
          ubicacion:'Las toninas'
        },
         {
          id:'3',
          titulo:'Patito',
          src:'patito.jpg',
          ubicacion:'Santa Teresita'
        },
         {
          id:'4',
          titulo:'Plaza del castillo',
          src:'plaza-del-castillo.jpg',
          ubicacion:'San clemente'
        },
         {
          id:'5',
          titulo:'La gracia',
          src:'la-gracia.jpg',
          ubicacion:'San bernardo'
        },
         {
          id:'6',
          titulo:'Palazzo',
          src:'palazzo.jpg',
          ubicacion:'Las toninas'
        },
         {
          id:'7',
          titulo:'Bufala',
          src:'bufala.jpg',
          ubicacion:'Nueva atlantis'
        },
        {
          id:'8',
          titulo:'Vigo',
          src:'vigo.jpg',
          ubicacion:'Mar de ajó'
        },
        
      ]
 })
}
</script>
<style scoped>
 .v-text-field{
      width: 49%;
}
.titulo-2{
    font-size: 40px;
}
.imagen-filtro{
    height: 360px;
}
    .logos-centro{
            max-width: 600px !important;
            height: 300px;
        }
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .8;
  position: absolute;
  width: 100%;
}

@media (max-width: 413px) { 
        
        .responsive{
            display: none;
        }
        
        .titulo-2{
            font-size: 25px;
            text-align: center;
        }
        .logo-centro{
            margin-top: 20px;
        }
        .imagen-filtro{
            height: 240px;
        }
     }
     @media (min-width: 413px) { 
         .titulo-2{
            text-align: center;
        }
        
        .logo-centro{
            margin-top: 20px;
        }
        .bottomTab{
            display: none;
        }
    }
@media (min-width: 1100px) { 
.v-text-field{
    width: 50%;
}
        .logo-centro{
            margin-top: 0px;
        }
        

}
@media (max-width: 1100px) { 
    .v-text-field[data-v-fae5bece] {
            width: 80%;
        }
    
}

</style>
