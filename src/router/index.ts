import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/Courses.vue'),
  },
  {
    path: '/courses/:course',
    props: true,
    component: () => import('@/views/Course.vue'),
    children: [
      {
        path: '/overview',
        name: 'Course.Overview',
        props: true,
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/resources',
        name: 'Course.Resources',
        props: true,
        component: () => import('@/views/About.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
