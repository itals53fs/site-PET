import Vue from 'vue'
import VueRouter from 'vue-router'
import AppContainer from '../views/AppContainer.vue'
const Home = ()=> import (/* webpackChunkName: "AppContainer" */ '../views/Home.vue' )
const Sobre = ()=> import (/* webpackChunkName: "Sobre" */ '../views/Sobre.vue' )
const construcao = ()=> import (/* webpackChunkName: "construcao" */ '../views/construcao.vue' )

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
