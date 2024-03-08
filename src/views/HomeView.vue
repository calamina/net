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
      :icon="section.icon" 
    />
    </div>
    <button class="toggleWork" @click="toggleWork()">workon</button>
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
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  padding: .25rem;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #ccc;
  color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
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
