<script setup lang="ts">
import links from '@/data/links.json'
import linkSection from '@/components/linkSection.vue'
import searchBar from '@/components/searchBar.vue'
import { useStorage } from '@vueuse/core'
import { onMounted } from 'vue'

const work = useStorage('work-active', false) // returns Ref<boolean>
const theme = useStorage('theme', 'light') // returns Ref<boolean>

function toggleWork() {
  work.value = !work.value
}

function handleThemeSelection() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-selected-theme", theme.value);
}

onMounted(() => {
  document.documentElement.setAttribute("data-selected-theme", theme.value);
})
</script>

<template>
  <main>
    <searchBar />
    <div class="links">
      <linkSection 
      v-for="(section, index) in links" 
        :work="toggleWork" 
        :key="index" 
        :title="section.title"
        :color="section.color" 
        :links="section.links" 
        :icon="section.icon" />
      </div>
      <button class="toggleWork" :class="{activeWork: work}" @click="toggleWork()">
        <svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='7' width='18' height='13' rx='2'></rect><path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path><path d='M12 12v.01'></path><path d='M3 13a20 20 0 0 0 18 0'></path></g></svg>
        work
    </button>
    <button @click="handleThemeSelection" class="theme-button">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3v18"></path><path d="M12 14l7-7"></path><path d="M12 19l8.5-8.5"></path><path d="M12 9l4.5-4.5"></path></g></svg>
      theme
    </button>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  padding: 2rem 0;
  display: grid;
  grid-template-rows: 3rem auto;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.links {
  display: flex;
  flex-flow: row;
  align-items: start;
  justify-content: center;
  gap: 2rem;
}

.toggleWork, .theme-button {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 1rem;
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

.toggleWork {
  right: 1rem;

  &.activeWork {
    color: #242424;
    background-color: #ccc;
  }
}

.theme-button {
  left: 1rem;
}

@media screen and (max-width: 1024px) {
  .links {
    flex-flow: column;
  }
}
</style>
