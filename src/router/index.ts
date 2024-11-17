import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/home', component: HomeComponent},
    {path: '/:catchAll(.*)', component: ErrorComponent}
  ],
  linkActiveClass: 'link_active',
})

export default router
