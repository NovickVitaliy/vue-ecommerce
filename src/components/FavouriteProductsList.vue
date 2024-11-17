<script setup lang="ts">
import { useFavouriteProductsStore } from "@/store/favourite-products-store";
import ProductComponent from "@/components/ProductComponent.vue";
import type { Product } from "@/models/product";

// Access the favourite products store
const favouriteProductsStore = useFavouriteProductsStore();
const favouriteProducts: Product[] = favouriteProductsStore.getFavouriteProducts();

</script>

<template>
  <div class="favourite-products">
    <h1>Favourite Products</h1>
    <div v-if="favouriteProducts.length === 0" class="favourite-products__empty">
      <p>No favourite products yet.</p>
    </div>
    <div v-else class="favourite-products__list">
      <ProductComponent
        v-for="product in favouriteProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
/* Container Styles */
.favourite-products {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Empty State */
.favourite-products__empty {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #777;
}

/* Product List */
.favourite-products__list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
}

/* Header */
h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}
</style>
