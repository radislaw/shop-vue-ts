<template>
  <AppLayout class="ProductPage">
    <h1>{{product.name}}</h1>
    <BreadCrumbs :items="breadCrumbs" />
    <main>
      <img :src="product.thumbnailUrl" :alt="product.name">
      <div class="caption">{{ product.name }}</div>
    </main>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from '@/types/Product';
import { getProduct } from '@/api/api';
import AppLayout from '@/components/AppLayout.vue';
import BreadCrumbs from '@/components/ui/BreadCrumbs.vue';
// import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  name: 'ProductPage',
  components: { BreadCrumbs, AppLayout },
  data() {
    return {
      product: {} as Product,
      breadCrumbs: [
        'Главная',
      ],
    };
  },
  computed: {
    productId(): string {
      return this.$route.params.productId.toString();
    },
  },
  mounted() {
    getProduct(this.productId)
      .then((data) => {
        this.product = data;
      });
  },
});
</script>
