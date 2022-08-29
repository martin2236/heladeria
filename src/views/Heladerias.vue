<template>
    <div>
    <h1 class="text-center">heladerias {{ $route.params.tipo.split(':')[1] }}</h1>
    <v-container class="d-flex flex-row flex-wrap justify-space-around ">
        <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row >
                    <v-col>
                        <v-icon class="pa-1 moto" color="white">
                            mdi-moped
                        </v-icon>
                    </v-col>
                    <v-col>
                         <v-icon class="pa-1 walk" color="white">
                            mdi-walk
                        </v-icon>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-1 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
        <!---*****************muestra borrar despues*******************************--->
          <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-6 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
          <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-6 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
          <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-6 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
         <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-6 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
         <v-card width="160" elevation="5" rounded="lg" class="mb-5">
            <v-img
                height="160"
                width="160"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text>
                <v-row class="d-flex justify-space-between">
                    <v-col 
                    cols="4"
                    class="like"
                    >
                       <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon
                                color="primary"
                            >
                            mdi-thumb-up-outline
                        </v-icon>
                        <p class="ma-0 pa-0" style=" font-weight:bold;">
                            18
                        </p>
                       </v-row>
                    </v-col>
                    <v-col 
                    cols="4"
                    class="star"
                    >
                        <v-row style="height:35px;" class="d-flex flex-row justify-space-around  align-center">
                            <v-icon color="primary">
                                mdi-star-outline
                            </v-icon>
                            <p class="ma-0 px-1" style="background-color:blue; color:white; font-weight:bold; border-radius:5px; font-size:12px;">
                                5.0
                            </p>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mt-6 ">
                    <p class="mb-2" style="font-size:20px;">una heladería</p>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.consola();
    },
    methods:{
        consola(){
            console.log(this.$route.params.tipo)
        }
    }
}
</script>

<style scoped>
    .like{
        background-color:rgb(224, 216, 216); 
        position:absolute; 
        left:0; 
        top:135px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .star{
        background-color:rgb(224, 216, 216); 
        position:absolute; 
        right:0; 
        top:135px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .moto{
        background-color:blue; 
        border-radius:100%;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    .walk{
         background-color:blue; 
        border-radius:100%;
        position: absolute;
        top: 45px;
        left: 5px;
    }
</style>