<template>
  <AppLayout>
    <h1>Каталог товаров</h1>
    <div class="categories">
      <CategoryCard
        v-for="category in categories.items"
        :key="category.id"
        :category="category"
        class="category"
      />
    </div>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/components/AppLayout.vue';
import { getCategories } from '@/api/api';
import { Categories } from '@/types/Categories';
import CategoryCard from '@/components/CategoryCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CategoryCard,
    AppLayout,
  },
  data() {
    return {
      categories: {} as Categories,
    };
  },
  mounted() {
    getCategories.then((data) => {
      this.categories = data;
    });
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
.categories {
  display: flex;
  justify-content: center;
}

.category {
  display: block;
  margin-right: 1rem;
}
</style>
