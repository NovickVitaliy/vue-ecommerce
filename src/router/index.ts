import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/home', component: HomeComponent}
  ],
  linkActiveClass: 'link_active',
})

export default router
