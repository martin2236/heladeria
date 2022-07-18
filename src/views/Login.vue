<template>
  <v-card color="primary" style="margin-top:60px" class="d-flex flex-column align-center" >
      <v-card-title style="position:absolute; top:-50px; border:2px solid #1976D2; background-color:white; border-radius:50%;height:95px;color:#1976D2; font-size:50px;">HY</v-card-title>
      <v-card-title class="white--text mt-10" style="font-size:40px;">Iniciar sesion</v-card-title>
      <v-card-text class="d-flex flex-column align-center mt-5">
           <div style="max-width:350px; background-color:#1976D2; " class="botonFace" > 
            <v-form style="width:100%"> 
              <v-text-field
                style="width:350px;"
                background-color="white"
                filled
                dense
                placeholder="Usuario"
              >
              </v-text-field>
                <v-text-field
                    background-color="white"
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                     filled
                    dense
                    @click="show1 = !show1"
                    placeholder="Contraseña"
                    @click:append="show1 = !show1"
                ></v-text-field>
               <v-btn
               style="width:350px;"
                color="white"
                class="primary--text"
               >
                  Ingresar
              </v-btn>
            </v-form>
            <v-divider class="mt-5" color="white"></v-divider>
            <v-btn
               style="width:350px;"
                color="white"
                class="primary--text mt-5"
               >
                <v-avatar
                    size="24"
                    class="mr-10"
                    style="border:1px solid #1976D2;"
                >
                    <img
                        src="../assets/google-icon.png"
                        alt="John"
                    >
                </v-avatar>
                  Iniciar sesion con Google
              </v-btn>
              <v-btn
               style="width:350px;"
                color="white"
                class="primary--text mt-5 mb-2 "
                
               >
               <v-avatar
                    size="24"
                    class="mr-6"
                >
                    <img
                        src="../assets/facebook-icon.png"
                        alt="John"
                    >
                </v-avatar>
                 Iniciar sesion con Facebook
              </v-btn>
           </div>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
data:()=>({
        show1: true,
        password: '',
        rules: {
          required: value => !!value || 'Complete este campo.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },

    })
}
</script>

<style >
    @media (max-width: 376px) { 
        .botonFace{
            margin-bottom: 20px !important;
        }
    }
</style>