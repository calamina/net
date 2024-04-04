<script setup lang="ts">
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleTheme } = useStateStore();
const { theme } = storeToRefs(useStateStore());
</script>

<template>
  <button @click="toggleTheme()" :class="{active: theme}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14l7-7"></path><path d="M12 19l8.5-8.5"></path><path d="M12 9l4.5-4.5"></path></g></svg>
    theme
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--color-text);
  height: 2rem;
  width: fit-content;
  background-color: transparent;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

.active {
  color: var(--color-text);
  background-color: var(--color-background-clear);
}
</style>
