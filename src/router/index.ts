import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import ProductCatalog from "@/components/ProductCatalog.vue";
import FavouriteProductsList from "@/components/FavouriteProductsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeComponent},
        {path: '/catalog', component: ProductCatalog},
        {path: '/favourites', component: FavouriteProductsList},
        {path: '/:catchAll(.*)', component: ErrorComponent},
    ],
    linkActiveClass: 'link_active',
})

export default router
