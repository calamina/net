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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
