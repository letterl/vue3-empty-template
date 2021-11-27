import Layout from '@/layout'
import type { RouteRecordRaw } from 'vue-router'

const home: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/login', //访问 / 时跳转到/login,
    meta: {
      title: '登入'
    },
    children: [
      {
        name: 'info',
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

export default home
