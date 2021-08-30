import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContainer from '../views/AppContainer.vue'
const Home = ()=> import (/* webpackChunkName: "AppContainer" */ '../views/Home.vue' )
const Sobre = ()=> import (/* webpackChunkName: "Sobre" */ '../views/Sobre.vue' )
const construcao = ()=> import (/* webpackChunkName: "construcao" */ '../views/construcao.vue' )
const galeria = ()=> import (/* webpackChunkName: "galeria" */ '../views/Galeria.vue' )

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'AppContainer',
    component: AppContainer,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre,
      },
      {
        path: '/construcao',
        name: 'construcao',
        component: construcao,
      },
      {
        path: '/galeria',
        name: 'Galeria',
        component: galeria,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
