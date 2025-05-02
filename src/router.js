// Vue Router setup for login/welcome pages
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Welcome from './components/Welcome.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/welcome', name: 'Welcome', component: Welcome, props: route => ({ email: route.query.email }) },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
