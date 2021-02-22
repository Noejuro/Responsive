import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import dynamicHeight from '../components/dynamic-height.vue'
import dynamicColumns from '../components/dynamic-columns.vue'
import dynamicDisplay from '../components/dynamic-display.vue'
import overflow from '../components/overflow.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/dynamicHeight', name: 'dynamicHeight', component: dynamicHeight },
  { path: '/dynamicColumns', name: 'dynamicColumns', component: dynamicColumns },
  { path: '/dynamicDisplay', name: 'dynamicDisplay', component: dynamicDisplay },
  { path: '/overflow', name: 'overflow', component: overflow },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
