<script setup lang="ts">
import { useCycleList, useDateFormat, useNow } from '@vueuse/core'
import { computed } from 'vue'

const {state, next } = useCycleList(['MMMM D', 'DD/MM/YY hh:ss'])
const now = computed(() => useDateFormat(useNow(), state.value))
</script>

<template>
  <button class="time" @click="next()">  
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></g></svg>
    <p>{{ now }}</p>
  </button>
</template>

<style scoped lang="scss">

.time {
  position: fixed;
  display: flex;
  align-items: center;
  top: 1rem;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--color-text);
  height: 2rem;
  background-color: transparent;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

.activeWork {
  color: var(--color-text);
  background-color: var(--color-background-clear);
}
</style>
