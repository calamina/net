<script setup lang="ts">
import links from '@/data/links.json'
import linkSection from '@/components/linkSection.vue'
import searchBar from '@/components/searchBar.vue'
import buttonWork from '@/components/buttonWork.vue'
import buttonTheme from '@/components/buttonTheme.vue'
import buttonTime from '@/components/buttonTime.vue'
</script>

<template>
  <main>
    <!-- <buttonTime /> -->
    <searchBar />
    <div class="links">
      <linkSection 
        v-for="(section, index) in links" :key="index" 
        :title="section.title"
        :links="section.links" 
        :icon="section.icon"
        :index="index">
      </linkSection>
    </div>
    <buttonWork />
    <buttonTheme />
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
  display: flex;
  flex-flow: row;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  position: relative;
}

@media screen and (max-width: 1024px) {
  .links {
    flex-flow: column;
  }
}
</style>
