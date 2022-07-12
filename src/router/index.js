import Vue from 'vue'
import VueRouter from 'vue-router'
import Listado from '../views/Listado.vue'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import Mapa from '../views/PoligonoMapa'
import Registro from '../components/Registro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listado',
    name: 'Listado',
    component: Listado
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: Mapa
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
