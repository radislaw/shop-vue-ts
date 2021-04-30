<template>
<div class="HeaderCart">
  <CartIcon />
  <Badge class="badge">2</Badge>
</div>
</template>

<script>
import Badge from '@/components/ui/Badge.vue';
import CartIcon from '@/components/icons/CartIcon.vue';

export default {
  name: 'HeaderCart',
  components: { CartIcon, Badge },
};
</script>

<style scoped>
.HeaderCart {
  position: relative;
}

.badge {
  position: absolute;
  left: 50%;
  top: -5px;

}
</style>
