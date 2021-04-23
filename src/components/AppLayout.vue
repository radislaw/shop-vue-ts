<template>
  <div class="AppLayout">
    <AppHeader class="header"/>
    <main class="main">
      <slot/>
    </main>
    <AppFooter class="footer"/>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'AppLayout',
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.AppLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main {
  @extend %container;
  flex: 1;
}
</style>
