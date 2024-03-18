<script setup lang="ts">
import { useColorMode, useCycleList, type BasicColorMode } from '@vueuse/core'
import { watchEffect } from 'vue'

const themes = { 
  light: 'light', 
  forest: "forest", 
  choco: "choco", 
  lavender: "lavender",
  dark: 'dark', 
  forestdark: "forestdark", 
  chocodark: "chocodark", 
  lavenderdark: "lavenderdark" 
}
const colorMode = useColorMode({  emitAuto: true,  modes: themes,  attribute: 'theme'})
const { state, next } = useCycleList(Object.values(themes), { initialValue: colorMode.value })

watchEffect(() => colorMode.value = state.value as BasicColorMode)
</script>

<template>
  <button @click="next()" class="theme-button">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14l7-7"></path><path d="M12 19l8.5-8.5"></path><path d="M12 9l4.5-4.5"></path></g></svg>
      theme
  </button>
</template>

<style scoped lang="scss">

.theme-button {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 1rem;
  left: 1rem;
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

</style>
