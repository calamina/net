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

const displayThemes = Object.values(themes)
const colorMode = useColorMode({  emitAuto: true,  modes: themes,  attribute: 'theme'})
const { state, go } = useCycleList(Object.values(themes), { initialValue: colorMode.value })

watchEffect(() => colorMode.value = state.value as BasicColorMode)
</script>

<template>
  <div class="container">
    <div class="themes">
      <button v-for="(theme, index) in displayThemes" :key="index" :theme="theme" @click="go(index)" class="theme" >
        <span v-for="i in 5" :key="i" class="color" :class="'color' + (i - 1)"></span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: var(--color-background);
  padding: 1rem 0;
}

.themes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem 1.25rem;
  background-color: var(--color-background-clear);
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.theme {
  display: flex;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

.color {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.5rem;
  &+ .color {
    margin-left: -0.5rem;
  }
}

.color0 {
  background-color: var(--color-background);
}
@for $i from 1 through 4 {
  .color#{$i} {
    background-color: var(--color-section-#{$i});
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

@media screen and (max-width: 1350px) {
  .container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem;
    width: calc(100vw - 2rem);
    z-index: 200;
  }

  .themes {
    grid-template-columns: repeat(min, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(50px,1fr));
  }
}
</style>
