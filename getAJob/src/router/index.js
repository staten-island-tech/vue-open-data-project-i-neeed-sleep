import InfoPage from '@/views/infoPage.vue'
import MainPage from '@/views/mainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:"home",
      component: MainPage,
    },
    {
      path:'/info/:id',
      name:"info",
      component: InfoPage,
    },
  ],
})

export default router
