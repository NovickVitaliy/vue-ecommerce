<script setup lang="ts">

import ProductComponent from "@/components/ProductComponent.vue";
import {useCartStore} from "@/store/cart-store";
import {computed} from "vue";

const cartStore = useCartStore();

const cart = computed(() => cartStore.getCart());

const totalPrice = computed(() => {
  return cart.value.products.reduce((sum, item) => sum + (item.quantity * item.product.price), 0)
});

const removeFromCart = (id: number) => {
  cartStore.removeItemFromCart(id);
}

</script>

<template>
  <div class="cart">
    <h1>Cart</h1>
    <div v-if="cart.products.length === 0" class="cart__empty">
      <p>No products in cart yet.</p>
    </div>
    <div v-else class="cart__list">
      <div class="cart__header">
        <h1>Total items in cart: {{ cart.totalItems }}. Total price of all items: {{totalPrice}}$</h1>
      </div>
      <div v-for="cartProduct in cart.products" class="cart__item">
        <div class="d-flex">
          <div class="cart__image">
            <img :src="cartProduct.product.images[0]" alt="">
          </div>
          <div class="p-5 cart__body">
            <h3>{{cartProduct.product.title}} <button class="btn btn-danger" @click="() => removeFromCart(cartProduct.product.id)">Remove</button></h3>
            <p>{{cartProduct.product.description}}</p>
            <b>Quantity: {{cartProduct.quantity}}. Total Price: {{cartProduct.product.price * cartProduct.quantity}}$</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  margin: 20px;
}

.cart__item {
  display: flex;
  margin-bottom: 10px;
}

.cart__image > img {
  width: 200px;
  height: 200px;
}

.cart__body {
  width: 75%;
}
</style>
