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
  flex: 1;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 0;
}
</style>
