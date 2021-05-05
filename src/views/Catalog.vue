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
import { mapActions, mapState } from 'vuex';
import AppLayout from '@/components/AppLayout.vue';
import CategoryCard from '@/components/CategoryCard.vue';
import { Products } from '@/types/Products';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductCard,
    CategoryCard,
    AppLayout,
  },
  computed: {
    ...mapState(['categories', 'products']),
  },
  methods: {
    ...mapActions(['fetchCategories', 'fetchProducts']),
  },
  mounted() {
    this.fetchCategories();
    this.fetchProducts('0');
  },
});
</script>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(2, 300px);
  //grid-auto-rows: 300px;
  grid-gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  //grid-auto-rows: 300px;
  grid-gap: 2rem 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}
</style>
