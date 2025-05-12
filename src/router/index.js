import { createRouter, createWebHistory } from 'vue-router'
import AuthApi from '@/api/AuthAPI'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('../views/auth/layout/AuthLayoutView.vue'),      
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/auth/login-register/LoginView.vue'),
        },
      ]
    },
    {
      path: '/',
      component: () => import('../views/layout/AppLayoutView.vue'),
      meta: { 
        requiresAuth: true 
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/home/HomeView.vue')
        },
        {
          path: 'mi-progreso',
          name: 'mi-progreso',
          component: () => import('../views/my-progress/MyProgressView.vue')
        },
        {
          path: 'mis-clases',
          name: 'mis-clases',
          component: () => import('../views/my-classes/MyClassesView.vue')
        },
        {
          path: 'eventos',
          name: 'eventos',
          component: () => import('../views/events/EventsView.vue')
        },
        {
          path: 'eventos/:slug',
          name: 'evento-info',
          component: () => import('../views/events/EventInfoView.vue')
        },
      ]
    },
  ],
})

/**
 *  Protege rutas
 */
router.beforeEach( async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  
  if (requiresAuth) {

    try {

      const { data } = await AuthApi.auth()

      if (data) {

        next()

      } else {

        next({
          name: 'login'
        })
      }
      
    } catch (error) {

      next({
        name: 'login'
      })

    }

  } else {

    next()
  }
  
})

export default router
