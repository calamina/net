<script setup lang="ts">
import { useColorMode, useCycleList, onClickOutside, type BasicColorMode } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

const target = ref(null)

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

const toggleThemes = ref(false);

const displayThemes = Object.values(themes)

const colorMode = useColorMode({  emitAuto: true,  modes: themes,  attribute: 'theme'})
const { state, go } = useCycleList(Object.values(themes), { initialValue: colorMode.value })

watchEffect(() => colorMode.value = state.value as BasicColorMode)

onClickOutside(target, event => toggleThemes.value = false)

function toggleTheme(index: number) {
  go(index);
  toggleThemes.value = !toggleThemes.value;
}
</script>

<template>
  <div class="wrapper" ref="target">
    <Transition name="fade" mode="out-in">
    <button v-if="!toggleThemes" @click="toggleThemes = !toggleThemes" class="theme-button">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14l7-7"></path><path d="M12 19l8.5-8.5"></path><path d="M12 9l4.5-4.5"></path></g></svg>
      theme
    </button>
    <div v-else class="themes">
      <button v-for="(theme, index) in displayThemes" :key="index" :theme="theme" class="theme" >
        <span @click="toggleTheme(index)" class="color color0"></span>
        <span @click="toggleTheme(index)" class="color color1"></span>
        <span @click="toggleTheme(index)" class="color color2"></span>
        <span @click="toggleTheme(index)" class="color color3"></span>
        <span @click="toggleTheme(index)" class="color color4"></span>
      </button>
    </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

.wrapper {
  position: fixed;
  z-index: 50;
  bottom: 1rem;
  left: 1rem;
}

.theme-button {
  display: flex;
  align-items: center;
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

.themes {
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem 1.25rem;
  padding: 0.25rem 0.25rem;
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
  background-color: var(--color-background-clear);
}
@for $i from 1 through 4 {
  .color#{$i} {
    background-color: var(--color-section-#{$i});
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}


@media screen and (max-width: 1024px) {

  .theme-button {
    background-color: var(--color-background-clear);
  }
  .themes {
    position: absolute;
    left: -1rem;
    right: 0;
    bottom: -1rem;
    background-color: var(--color-background-clear);
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    width: 100vw;
    padding: 1.5rem;
  }
  
  .color0 {
    background-color: var(--color-background);
  }
}
</style>
