<template>
  <AppLayout class="ProductPage">
    <h1>kkkkk</h1>
    <div class="products">
      ghwresd
<!--      <ProductCard-->
<!--        v-for="product in products.items"-->
<!--        :key="product.id"-->
<!--        :product="product"-->
<!--      />-->
    </div>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { Product } from '@/types/Product';
// import { getProducts } from '@/api/api';
import AppLayout from '@/components/AppLayout.vue';
// import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  name: 'ProductPage',
  components: { AppLayout },
  // props: {
  //   product: {
  //     type: Object as PropType<Product>,
  //   },
  // },
  // computed: {
  //   productId(): string {
  //     return this.$route.params.productId.toString();
  //   },
  // },
  // mounted() {
  //   getProducts(this.productId).then((data) => {
  //     this.products = data;
  //   });
  // },
});
</script>
