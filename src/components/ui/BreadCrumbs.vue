<template>
  <ul>
    <li v-for="(item, i) in items" :key="i">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    items: Array,
  },
};
</script>
