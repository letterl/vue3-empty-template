import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'

import routes from './routes'

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0
    }
  }
})

router.beforeEach(to => {
  nProgress.start()
  document.title = to.meta.title
  return true
})

router.afterEach(() => {
  nProgress.done()
})

// 配置route-meta类型
declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth?: boolean
    title: string
  }
}

export default router
