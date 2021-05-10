<template>
  <div class="ProductCard">
    <figure>
      <RouterLink :to="{name: 'ProductPage', params: {productId: product.id}}">
        <img :src="product.thumbnailUrl" :alt="product.name" class="image">
        <figcaption class="caption">{{ product.name }}</figcaption>
      </RouterLink>
    </figure>
    <div class="price">{{ product.defaultDisplayedPriceFormatted }}</div>
    <AppButton :loading="isLoading" @click="addToCart" class="button">
      <template v-if="false">
        Купить
      </template>
      <template v-else>
        Корзина
      </template>
    </AppButton>
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
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .07);
  box-shadow: 0 1px 3px var(--black-10);
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;

  .image {
    transition: transform 0.2s ease;
    margin-bottom: 0.5rem;
  }

  .caption {
    color: var(--black-80);
    text-decoration: none;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  .price {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    .caption {
      color: var(--blue-dark);
    }

    .image {
      transform: scale(1.01);
    }
  }
  .button {
    margin: 0 auto;
  }
}
</style>
