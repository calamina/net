<script setup lang="ts">
import linkSection from '@/components/linkSection.vue'
import links from '@/data/links.json'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

const flag = useStorage('work-active', false) // returns Ref<boolean>
const workOn = computed(() => flag.value ? '5' : '4')

function toggleWork() {
  flag.value = !flag.value
}

</script>

<template>
  <main>
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
    <div class="toggleWork" :class="{activeWork: flag}" @click="toggleWork()">
      <svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='7' width='18' height='13' rx='2'></rect><path d='M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path><path d='M12 12v.01'></path><path d='M3 13a20 20 0 0 0 18 0'></path></g></svg>
      work
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.links {
  display: grid;
  grid-template-columns: repeat(v-bind(workOn), 1fr);
  align-items: start;
  justify-content: center;
  gap: 2rem;
}

.toggleWork {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  bottom: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 2rem;
  padding: 0.5rem;
  color: #ccc;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

.activeWork {
  color: #242424;
  background-color: #ccc;
}

@media screen and (max-width: 1024px) {
  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .links {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
