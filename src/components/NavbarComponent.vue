<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">

        <h1>Secret Shop</h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Catalog
      </b-navbar-item>
      <b-navbar-item href="#">
        Favorites
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <!-- Кнопка з іконкою корзини -->
          <a class="button is-light">
            <b-icon icon="cart" size="is-small"></b-icon>
            <span>Cart</span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
