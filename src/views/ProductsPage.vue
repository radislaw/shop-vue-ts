<template>
  <AppLayout class="ProductPage">
    <h1>{{ categoryTitle }}</h1>
    <div class="products">
      <ProductCard
        v-for="product in products.items"
        :key="product.id"
        :product="product"
      />
    </div>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Products } from '@/types/Products';
import { getProducts } from '@/api/api';
import AppLayout from '@/components/AppLayout.vue';
import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'ProductsPage',
  components: { ProductCard, AppLayout },
  data() {
    return {
      products: {} as Products,
    };
  },
  computed: {
    ...mapState(['categoryTitle']),
    categoryId(): string {
      return this.$route.params.categoryId.toString();
    },
  },
  mounted() {
    getProducts(this.categoryId).then((data) => {
      this.products = data;
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
