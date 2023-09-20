import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const base = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(base),
  extendRoutes(routes) {
    return setupLayouts(routes)
  },
})

export default router
