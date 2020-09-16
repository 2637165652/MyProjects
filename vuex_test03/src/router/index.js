import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '@/components/ShopCar'
import Goods from '@/components/Goods'
import Search from '@/components/Search'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Goods
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopCar,
      children: [
        {
          path: 'goods', // 不能写成 '/goods'
          component: Goods
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
