<template>
  <AppLayout class="ProductPage">
    <h1>Товар {{$route.params.productId}}</h1>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/components/AppLayout.vue';

export default defineComponent({
  name: 'ProductPage',
  components: { AppLayout },
});
</script>
