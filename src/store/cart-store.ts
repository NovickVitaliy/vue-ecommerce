import {defineStore} from "pinia";
import {ref} from "vue";
import type {Cart} from "@/models/cart";
import type {Product} from "@/models/product";

export const useCartStore = defineStore('cart', () => {
    const cartStorageKey = 'x-cart';
    const cart = ref<Cart>(getCartFromStorageOrDefault());
    function getCartFromStorageOrDefault(): Cart {
        const storedCart = localStorage.getItem(cartStorageKey);
        return storedCart ? JSON.parse(storedCart) : {products: [], totalItems: 0};
    }

    function saveToStorage() {
        localStorage.setItem(cartStorageKey, JSON.stringify(cart.value));
    }

    function updateTotalItems() {
        cart.value.totalItems = cart.value.products.reduce((sum, item) => sum + (item.quantity || 0), 0);
    }

    function getCart(): Cart {
        return cart.value;
    }

    function addItemToCart(product: Product){
        const item = cart.value.products.filter(i => i.product.id === product.id)[0];
        if(item){
            item.quantity++;
        } else {
            cart.value.products.push({product: product,quantity:1});
        }
        updateTotalItems();
        saveToStorage();
    }

    function removeItemFromCart(id: number){
        cart.value.products = cart.value.products.filter(i => i.product.id !== id);
        updateTotalItems();
        saveToStorage();
    }

    function isItemInCart(id: number){
        const item = cart.value.products.filter(x => x.product.id === id)[0];
        return item !== undefined;
    }

    return { getCart, addItemToCart, removeItemFromCart, isItemInCart }
});
