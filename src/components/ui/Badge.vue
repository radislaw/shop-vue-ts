<template>
  <div class="Badge">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Badge',

};
</script>

<style lang="scss" scoped>
.Badge {
  background-color: #f00;
  color: #fff;
  min-width: 1.25rem;
  height: 1.25rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  border-radius: 2rem;
}
</style>
