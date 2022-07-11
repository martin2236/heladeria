import Vue from 'vue'
import VueRouter from 'vue-router'
import Listado from '../views/Listado.vue'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
// import PoligonoMapa from '../views/PoligonoMapa.vue'

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
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/listado',
    name: 'Listado',
    component: PoligonoMapa
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
