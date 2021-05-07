<template>
  <AppLayout>
    <h1>Каталог товаров</h1>
    <div class="categories">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
    <h2>Популярные товары</h2>
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
import AppLayout from '@/components/AppLayout.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import { Product } from '@/types/Product';
import { Category } from '@/types/Category';
import { getCategories, getProducts } from '@/api/api';

export default defineComponent({
  name: 'Home',
  components: {
    ProductCard,
    CategoryCard,
    AppLayout,
  },
  data() {
    return {
      products: [] as Product[],
      categories: [] as Category[],
    };
  },
  mounted() {
    getCategories()
      .then(({ items }) => {
        this.categories = items;
      });
    getProducts()
      .then(({ items }) => {
        this.products = items;
      });
  },
});
</script>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 2rem 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}
</style>
