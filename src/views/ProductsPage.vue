<template>
  <AppLayout class="ProductPage">
    <h1>{{ category.name }}</h1>
    <div class="products">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';
import { getCategory, getProducts } from '@/api/api';
import AppLayout from '@/components/AppLayout.vue';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  name: 'ProductsPage',
  components: { ProductCard, AppLayout },
  data() {
    return {
      products: [] as Product[],
      category: {} as Category,
    };
  },
  computed: {
    categoryId(): string {
      return this.$route.params.categoryId.toString();
    },
  },
  mounted() {
    getProducts(this.categoryId)
      .then(({ items }) => {
        this.products = items;
        getCategory(this.categoryId)
          .then((category) => {
            this.category = category;
          });
      });
  },
});
</script>

<style lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  //grid-auto-rows: 300px;
  grid-gap: 1rem;
  justify-content: center;
}
</style>
