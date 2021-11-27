import type { RouteRecordRaw } from 'vue-router'

const login: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登入'
    }
  }
]

export default login
