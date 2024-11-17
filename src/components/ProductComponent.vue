<template>
  <div class="product-card">
    <img :src="product.images[0]" alt="Product Image" class="product-card__image" />
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__price">$ {{ product.price.toFixed(2) }}</p>
    <div class="d-flex w-100 justify-content-between">
      <button @click="toggleFavourite" class="btn btn-secondary">
        <font-awesome-icon
            :icon="isInFavourite ? ['fas', 'heart'] : ['far', 'heart']"
            :style="{color: isInFavourite ? 'red' : ''}"></font-awesome-icon>
      </button>
      <button @click="toggleCart" class="btn btn-secondary">
        <font-awesome-icon icon="cart-shopping"
          :style="{color: isInCart ? 'green' : ''}"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "@/models/product";
import {useFavouriteProductsStore} from "@/store/favourite-products-store";
import {useCartStore} from "@/store/cart-store";
import {computed} from "vue";
const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

const cartStore = useCartStore();
const favouriteProductsStore = useFavouriteProductsStore();

const isInFavourite = computed(() => {
  return favouriteProductsStore.isInFavourites(props.product.id);
})

const isInCart = computed(() => {
  return cartStore.isItemInCart(props.product.id);
});

const toggleFavourite = () => {
  if(favouriteProductsStore.isInFavourites(props.product?.id)){
    favouriteProductsStore.removeProductFromFavourites(props.product?.id);
  } else {
    favouriteProductsStore.addProductToFavourites(props.product);
  }
}

const toggleCart = () => {
  if(cartStore.isItemInCart(props.product?.id)){
    cartStore.removeItemFromCart(props.product?.id);
  } else {
    cartStore.addItemToCart(props.product);
  }
}

</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card__image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-card__title {
  font-size: 16px;
  margin: 10px 0;
}

.product-card__price {
  font-size: 14px;
  color: #555;
}
</style>
