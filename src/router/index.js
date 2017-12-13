import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashborad'
import Heroes from '../components/heroes'
import HeroDetail from '../components/hero-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/heroes',
      component: Heroes
    },
    {
      name: 'HeroDetail',
      path: '/heroes/:id',
      component: HeroDetail
    }
  ]
})
