import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Product from '@/components/Product'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        {path: '/', component: Hi},
        {path: 'hi1', name: 'hi1', component: Hi1},
        {path: 'hi2', component: Hi2}
      ]
    }
  ]
})
