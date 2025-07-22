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
          path: 'users-birthday',
          name: 'users-birthday',
          component: () => import('../views/user/users/UsersBirthdayView.vue')
        },
        {
          path: 'usuarios-destacados',
          name: 'featured-users',
          component: () => import('../views/user/users/UsersFeaturedView.vue')
        },
        {
          path: 'equipo-king-dreams',
          name: 'team',
          component: () => import('../views/user/team/TeamView.vue')
        },
        {
          path: 'profesores-king-dreams',
          name: 'coach',
          component: () => import('../views/user/coach/CoachView.vue')
        },
        {
          path: 'tips',
          name: 'tips',
          component: () => import('../views/user/tips/TipsView.vue')
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
          component: () => import('../views/user/my-class-schedule/MyClassScheduleView.vue')
        },
        {
          path: 'eventos',
          name: 'events',
          component: () => import('../views/user/content/EventView.vue')
        },
        {
          path: 'notices',
          name: 'notices',
          component: () => import('../views/user/content/NoticeView.vue')
        },
        {
          path: 'contenido-detalle/:slug',
          name: 'content-detail',
          component: () => import('../views/user/content/ContentDetailView.vue')
        },
        {
          path: 'mi-perfil',
          name: 'my-profile',
          component: () => import('../views/user/profile/ProfileView.vue')
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
      meta: { 
        requiresAdmin: true 
      },
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
          path: 'contenido-edit/:slug',
          name: 'admin-content-edit',
          component: () => import('../views/admin/content/ContentEditView.vue')
        },
        {
          path: 'categorias',
          name: 'admin-categories',
          component: () => import('../views/admin/categories/CategoriesView.vue')
        },
        {
          path: 'reportes',
          name: 'admin-reports',
          component: () => import('../views/admin/reports/ReportsView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/errors/404View.vue'),
      meta: { title: '404 Not Found' }
    }
  ],
})

/**
 *  Protege rutas
 */
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)
  const requiresAdmin = to.matched.some(route => route.meta.requiresAdmin)

  try {
    const { data } = await AuthApi.auth()
    const user = data?.data
    
    // No autenticado y requiere login
    if (!user && requiresAuth) {
      return next({ 
        name: 'login' 
      })
    }

    // No autenticado y requiere admin
    if (!user && requiresAdmin) {
      return next({ 
        name: 'login' 
      })
    }

    // Está autenticado pero no es admin e intenta acceder a /admin
    if (requiresAdmin && user.role_id !== 1) {
      return next({ 
        name: 'home' 
      })
    }

    // Autenticación éxitosa
    return next()

  } catch (error) {
    
    if (requiresAuth || requiresAdmin) {
      return next({ 
        name: 'login' 
      })
    }

    return next()
  }

})


export default router
