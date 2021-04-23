<template>
  <div class="AppHeader">
    <div class="header-container">
      <RouterLink to="/">Главная</RouterLink>
      <HeaderCart />
    </div>
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
  padding: 1.25rem 0;
  box-shadow: var(--tw-shadow) !important;
  background-color: var(--white);

  .header-container {
    @extend %container;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>
