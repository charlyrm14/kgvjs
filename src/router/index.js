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
          component: () => import('../views/auth/login/LoginView.vue'),
        },
      ]
    },
    {
      path: '/password',
      component: () => import('../views/password/layout/PasswordLayoutView.vue'),
      children: [
        {
          path: 'email',
          name:'password-email',
          component: () => import('../views/password/email/EmailView.vue')
        },
        {
          path: 'reset',
          name: 'password-reset',
          component: () => import('../views/password/reset/ResetView.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('../views/user/layout/AppLayoutView.vue'),
      meta: { 
        requiresAuth: true 
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/user/home/HomeView.vue')
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('../views/user/chat/ChatView.vue')
        },
        {
          path: 'mi-progreso',
          name: 'mi-progreso',
          component: () => import('../views/user/my-progress/MyProgressView.vue')
        },
        {
          path: 'mis-clases',
          name: 'mis-clases',
          component: () => import('../views/user/my-classes/MyClassesView.vue')
        },
        {
          path: 'publicaciones',
          name: 'contents',
          component: () => import('../views/user/contents/ContentsView.vue')
        },
        {
          path: 'publicaciones/:slug',
          name: 'contents-info',
          component: () => import('../views/user/contents/ContentInfoView.vue')
        },
        {
          path: 'configuracion',
          name: 'settings',
          component: () => import('../views/user/settings/SettingsView.vue')
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/admin/layout/AdminAppLayoutView.vue'),
      children: [
        {
          path: '',
          name: 'admin-home',
          component: () => import('../views/admin/home/AdminHomeView.vue')
        },
        {
          path: 'user-profile/:id',
          name: 'admin-user-profile',
          component: () => import('../views/admin/users/UserProfileView.vue')
        },
        {
          path: 'contenido',
          name: 'admin-content',
          component: () => import('../views/admin/content/ContentView.vue')
        },
        {
          path: 'categorias',
          name: 'admin-categories',
          component: () => import('../views/admin/categories/CategoriesView.vue')
        }
      ]
    }
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
