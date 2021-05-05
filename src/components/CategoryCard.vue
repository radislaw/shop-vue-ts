<template>
  <figure class="CategoryCard">
    <RouterLink :to="{name: 'catalog', params: {categoryId: category.id}}">
      <img :src="category.thumbnailUrl" :alt="category.name">
      <figcaption class="caption">{{ category.name }}</figcaption>
    </RouterLink>
  </figure>
</template>

<script lang="ts">
import { Category } from '@/types/Category';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CategoryCard',
  props: {
    category: {
      type: Object as PropType<Category>,
    },
  },
});
</script>

<style lang="scss">
.CategoryCard {
  box-shadow: var(--shadow);
  border-radius: 0.25em;
  position: relative;
  overflow: hidden;
  background-color: var(--bg-color-card);

  .caption {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-base);
    font-weight: bold;
  }

  &:hover {
    box-shadow: var(--shadow-hover);
  }

  &:active {
    box-shadow: var(--shadow);
  }
}
</style>
