<script setup lang="ts">
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleInfo } = useStateStore();
const { info } = storeToRefs(useStateStore());
</script>

<template>
  <button @click="toggleInfo()" :class="{active: info}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2a2 2 0 0 0-2-2z"></path><path d="M12 5v16"></path><path d="M7 7h1"></path><path d="M7 11h1"></path><path d="M16 7h1"></path><path d="M16 11h1"></path><path d="M16 15h1"></path></g></svg>
    about
  </button>
</template>

<style scoped lang="scss">

button {
  margin-top: 1rem;
  margin-right: 1rem;
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

@media screen and (max-width: 1024px) {
  button {
    position: fixed;
    top: unset;
    bottom: 1rem;
    right: 0rem;
    left: 0rem;
    margin: 0 auto;
    z-index: 999;
  }
}
</style>
