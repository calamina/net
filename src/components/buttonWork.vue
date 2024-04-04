<script setup lang="ts">
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleWork } = useStateStore();
const { work } = storeToRefs(useStateStore());

</script>

<template>
  <button :class="{activeWork: work}" @click="toggleWork()">
    <svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='7' width='18' height='13' rx='2'></rect><path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path><path d='M12 12v.01'></path><path d='M3 13a20 20 0 0 0 18 0'></path></g></svg>
    work
  </button>
</template>

<style scoped lang="scss">

button {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 1rem;
  right: 1rem;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--color-text);
  height: 2rem;
  background-color: transparent;
  z-index: 300;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

.activeWork {
  color: var(--color-text);
  background-color: var(--color-background-clear);
}

@media screen and (max-width: 1024px) {
  button {
    position: fixed;
  }
}
</style>
