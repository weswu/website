// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/components/home/Index.vue'),
      children: [
        {
          path: '',
          name: '主页',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'music',
          name: '音乐',
          component: () => import('@/views/music/Index.vue'),
        },
        {
          path: 'pro',
          name: '文章',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'contact-us',
          name: '联系我们',
          component: () => import('@/views/contact-us/Index.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'about',
          name: '个人中心',
          component: () => import('@/views/about/Index.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
