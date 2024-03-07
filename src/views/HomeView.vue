<script setup lang="ts">
import linkSection from '@/components/linkSection.vue'
import type LinkList from '@/models/linklist'
import links from '@/data/links.json'
import { ref } from 'vue'

const list = ref<LinkList[]>(links)
</script>

<template>
  <main>
    <div class="links">
      <linkSection 
      v-for="(section, index) in links" 
      :key="index" 
      :title="section.title" 
      :color="section.color"
      :links="section.links" 
      :icon="section.icon" 
    />
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  justify-content: center;
  gap: 2rem;
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
