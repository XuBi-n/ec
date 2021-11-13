import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Home from "../views/ecAfterwards/Home";
import Index from "../views/ecAfterwards/Index";
import Control from "../views/ecAfterwards/Control";
import ProductList from "../views/ecAfterwards/ProductList";
import News from "../views/ecAfterwards/News";
import Consumer from "../views/ecAfterwards/Consumer";
import Adduser from "../views/ecAfterwards/Adduser";
import ChangePassword from  "../views/ecAfterwards/ChangePassword";
import Couponmanagement from "../views/ecAfterwards/Couponmanagement"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'Index',
        meta: {
          title: "首页"
        },
        component: Index
      },
      {
        path: '/control',
        name: 'Control',
        meta: {
          title: "商品一级类别管理"
        },
        component: () => import('../views/ecAfterwards/Control.vue')
      },
      {
        path: '/pl',
        name: 'ProductList',
        meta: {
          title: "产品列表"
        },
        component: () => import('../views/ecAfterwards/ProductList.vue')
      },
      {
        path: '/news',
        name: 'News',
        meta: {
          title: "新闻管理"
        },
        component: () => import('../views/ecAfterwards/News.vue')
      },
      {
        path: '/users',
        name: 'Consumer',
        meta: {
          title: "用户管理"
        },
        component: () => import('../views/ecAfterwards/Consumer.vue')
      },
      {
        path: '/add',
        name: 'Adduser',
        meta: {
          title: "新增用户"
        },
        component: () => import('../views/ecAfterwards/Adduser.vue')
      },
      {
        path:'/pwd',
        name:'ChangePassword',
        meta: {
          title: "修改密码"
        },
        component: ()=>import('../views/ecAfterwards/ChangePassword')
      },
      {
        path: '/coupon',
        name: 'Couponmanagement',
        meta: {
          title: "优惠券管理"
        },
        component: () => import('../views/ecAfterwards/Couponmanagement.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a s
  //   parate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
