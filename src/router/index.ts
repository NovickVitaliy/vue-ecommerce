import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "@/components/HomeComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
import ProductCatalog from "@/components/ProductCatalog.vue";
import FavouriteProductsList from "@/components/FavouriteProductsList.vue";
import CartComponent from "@/components/CartComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeComponent},
        {path: '/catalog', component: ProductCatalog},
        {path: '/favourites', component: FavouriteProductsList},
        {path: '/cart', component: CartComponent},
        {path: '/vue-ecommerce', component: HomeComponent},
        {path: '/:catchAll(.*)', component: ErrorComponent},
    ],
    linkActiveClass: 'link_active',
})

export default router
