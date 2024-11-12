import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '@/models/product'

export const useFavouriteProductsStore = defineStore('favourite-products', () => {
  const favouriteProductsKey = 'x-favourite'
  const favouriteProducts = ref<Product[]>(loadFromStorage())

  function saveToStorage() {
    localStorage.setItem(favouriteProductsKey, JSON.stringify(favouriteProducts.value))
  }

  function loadFromStorage() {
    const storedFavoriteProducts = localStorage.getItem(favouriteProductsKey)
    return storedFavoriteProducts ? (JSON.parse(storedFavoriteProducts) as Product[]) : []
  }

  function getFavouriteProducts() {
    return favouriteProducts.value
  }

  function addProductToFavourites(product: Product) {
    favouriteProducts.value.push(product)
    saveToStorage()
  }

  function removeProductFromFavourites(id: number) {
    favouriteProducts.value = favouriteProducts.value.filter((i) => i.id !== id)
    saveToStorage()
  }

  function isInFavourites(id: number) {
    const item = favouriteProducts.value.find((i) => i.id === id)
    return item !== null
  }

  return {
    getFavouriteProducts,
    addProductToFavourites,
    removeProductFromFavourites,
    isInFavourites,
  }
})
