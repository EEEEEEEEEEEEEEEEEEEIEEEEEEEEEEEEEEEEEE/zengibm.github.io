import store from '../store'
import Vue from 'vue'
import router from './routes'

router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth) { // 判断前往的界面是否需要登陆
  //   if (store.state.login.user_token) { // 是否已经登陆
  //     store.commit('SET_ROUTER_LOGIN', false)
  //     next()
  //   } else {
  //     Vue.prototype.toPath = to.fullPath
  //     store.commit('SET_ROUTER_LOGIN', true)
  //     // next()
  //   }
  // } else {
  //   store.commit('OPEN_MASK')
  //   window.maskTimeout && clearTimeout(window.maskTimeout)
  //   window.maskTimeout = setTimeout(() => {
  //     store.commit('CLOSE_MASK')
  //   }, 300)
  //   next()
  // }
})

router.afterEach((to, from) => {
  // gtag('config', 'UA-122489320-25', {'page_path': to.fullPath})
  // if (to.fullPath !== '/index/home') {
  //   store.dispatch('FETCH_LOADING', false)
  // }
})

export default router
