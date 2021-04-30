<template>
  <div class="ProductCard">
    <img :src="product.thumbnailUrl" alt="">
    {{ product.name }}
    {{ product.price }}
    <AppButton :loading="isLoading" @click="addToCart">Купить</AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppButton from './ui/AppButton.vue';

export default defineComponent({
  name: 'ProductCard',
  components: { AppButton },
  props: {
    product: Object,
  },
  data() {
    return {
      status: 'idle',
    };
  },
  methods: {
    addToCart() {
      this.status = 'loading';
    },
  },
  computed: {
    isLoading(): boolean {
      return this.status === 'loading';
    },
  },
});
</script>

<style lang="scss" scoped>
.ProductCard {

}
</style>
