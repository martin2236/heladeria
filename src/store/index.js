import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:'#5C6BC0',
    apellido_nombre:'',
    pk_estudiante:'',
    pk_carrera:'',
    url_api:'http://jorgeperalta-001-site4.itempurl.com/backend_postulacion/',
    url_api_local:'http://localhost/backend_postulacion/'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
