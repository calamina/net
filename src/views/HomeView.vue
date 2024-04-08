<script setup lang="ts">
import links from '@/data/links.json'
import searchComponent from '@/components/search/searchComponent.vue'
import buttonWork from '@/components/buttonWork.vue'
import componentTheme from '@/components/theme/componentTheme.vue'
import componentInfo from '@/components/info/componentInfo.vue'
import blockLinkList from '@/components/link/blockLinkList.vue'
</script>

<template>
  <main>
    <searchComponent />
      <div class="links">
        <blockLinkList 
          v-for="(link, index) in links" :key="index" 
          :title="link.title"
          :links="link.links" 
          :icon="link.icon"
          :disable="link.disable ?? false"
          :index="index">
        </blockLinkList>
      </div>
    <buttonWork />
    <componentTheme />
    <componentInfo />
  </main>
  <div class="phone-menu"></div>
</template>

<style scoped>
main {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.phone-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  background-color: var(--color-background);
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  display: none;
}

.links {
  display: flex;
  flex-flow: row;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  position: relative;
}

@media screen and (max-width: 1350px) {
  main {
    padding: 1rem;
    gap: 1rem;
  }
  .links {
    width: 100%;
    height: 100%;
    flex-flow: column;
    padding-bottom: 3rem;
    margin: auto 0;
    gap: 1rem;
    justify-content: space-evenly;
  }
  .phone-menu {
    display: block;
  }
}
</style>
