<template>
  <AppLayout>
    <h1>Корзина</h1>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/components/AppLayout.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AppLayout,
  },
});
</script>
