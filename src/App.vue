<template>
  <div id="nav">
    <AppLayout>
      <ul class="products">
        <li v-for="product in products" :key="product.id" class="product">
          {{ product.thumbnailUrl }}
          {{ product.name }}
          {{ product.price }}
          <button type="button" class="button"><svg width="16" height="16" fill="currentColor" class="icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path></svg>
          Купить
          </button>
        </li>
      </ul>
    </AppLayout>
  </div>
  <router-view/>
</template>

<script lang="ts">
import AppLayout from '@/components/AppLayout.vue';
// import { getProducts } from '@/api/api';
import { defineComponent } from 'vue';
// import { Product } from '@/types/Product';
const products = require('@/api/products.json');

export default defineComponent({
  components: { AppLayout },
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    this.products = products.items;
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}

#nav {
  margin: 0;
  padding: 0;
  background-color: rgba(243,244,246, 1);
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.product {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-shadow);
  border-radius: .5rem;
  background-color: #fff;
  padding: 1rem;
}

.icon {
  margin-right: 0.25rem;
  //animate-spin
}

.button {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: white;
  background-color: rgba(37,99,235, 1);
  border: none;
  border-radius: .25rem;
  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
  -webkit-appearance: button;
  cursor: pointer;

  &:hover {
    background-color: rgba(29,78,216, 1);
  }

  &:focus {
    background-color: rgba(59,130,246, 1);
  }
  // focus:ring-offset-blue-200
  // text-white w-full ease-in duration-200
  // text-center text-base font-semibold shadow-md
  // focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg
}
</style>
