<template>
  <div class="AppHeader">
    <RouterLink to="/">Каталог</RouterLink>
    <HeaderCart/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderCart from '@/components/HeaderCart.vue';

export default defineComponent({
  name: 'AppHeader',
  components: { HeaderCart },
});
</script>

<style lang="scss" scoped>
.AppHeader {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  box-shadow: var(--tw-shadow) !important;
  background-color: #fff;
}

</style>
