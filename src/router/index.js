import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/Firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{requiresAuth:true}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta:{requiresAuth:true}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/RegisterForm.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to , from , next)=>{
  if (to.name === 'login' && auth.currentUser){
    console.log('redirect to home');
    next('/')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return;
  }
  else next();
})

export default router