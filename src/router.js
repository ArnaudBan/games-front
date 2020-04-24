import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Homes"
import Login from "./views/Login"
import Game from "./views/Game"
import store from './store'


Vue.use(Router)

const router = new Router({
  routes:  [
    { path: '/', component: Home, name: 'home',meta: {
        requiresAuth: true
      } },
    { path: '/login', component: Login, name: 'login' },
    { path: '/game/:id', component: Game, name: 'game', meta: {
        requiresAuth: true
      } },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router