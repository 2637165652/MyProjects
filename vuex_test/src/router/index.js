import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '@/components/ShopCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopCar',
      component: ShopCar
    }
  ]
})
