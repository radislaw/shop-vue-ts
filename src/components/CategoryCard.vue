<template>
  <figure class="CategoryCard">
    <RouterLink
      :to="`/${category.id}`"
    >
      <img :src="category.thumbnailUrl" alt="">
      <figcaption>{{ category.name }}</figcaption>
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

<style lang="scss" scoped>
.CategoryCard {
  box-shadow: var(--shadow);
  border-radius: 0.25em;
}
</style>
