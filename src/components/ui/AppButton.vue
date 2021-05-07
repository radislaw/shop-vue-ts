<template>
  <component :is="tag" to="/" class="AppButton" :class="{'-inactive': loading}">
    <LoadingIcon
      v-if="loading"
      class="icon"
      :class="{'-loading': loading}"
    />
    <slot />
  </component>
</template>

<script lang="ts">
import LoadingIcon from '@/components/icons/LoadingIcon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
  components: { LoadingIcon },
  props: {
    tag: {
      type: String,
      default: 'RouterLink',
    },
    loading: Boolean,
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    primary(): boolean {
      return this.type === 'primary';
    },
  },
});
</script>

<style lang="scss" scoped>
.AppButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  color: var(--color-btn);
  background-color: var(--bg-color-btn-primary);
  border: none;
  border-radius: .25rem;
  transition-property: all;
  -webkit-appearance: button;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: var(--bg-color-btn-primary-hover);
  }

  &:focus {
    background-color: var(--bg-color-btn-primary-focus);
  }

  &.-inactive {
    opacity: 0.6;
    pointer-events: none;
  }

  // focus:ring-offset-blue-200
  // text-white w-full ease-in duration-200
  // text-center text-base font-semibold shadow-md
  // focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg

  .icon {
    margin-right: 0.5rem;
  }

  .-loading {
    animation: spin 1s linear infinite;
  }
}
</style>
