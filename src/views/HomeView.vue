<script setup lang="ts">
import { ref } from 'vue'
import links from '@/data/links.json'
import linkSection from '@/components/linkSection.vue'
import searchBar from '@/components/searchBar.vue'
import buttonWork from '@/components/buttonWork.vue'
import buttonTheme from '@/components/buttonTheme.vue'
import buttonInfo from '@/components/buttonInfo.vue'
import infoSection from '@/components/infoSection.vue'
// import buttonTime from '@/components/buttonTime.vue'

const showInfo = ref(false)
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
    <buttonInfo @click="showInfo = !showInfo" />
  </main>
  <Transition name="slide" mode="out-in">
    <infoSection v-if="showInfo" />
  </Transition>
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
  z-index: 100;
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

@media screen and (max-width: 1024px) {
  main {
    padding: 1rem;
    gap: 1rem;
  }
  .links {
    width: 100%;
    height: 100%;
    flex-flow: column;
    padding-bottom: 4rem;
    margin: auto 0;
    gap: 1rem;
    justify-content: space-evenly;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: width 0.3s, padding 0.3s;
}
.slide-enter-from , .slide-leave-to {
  width: 0;
  padding: 1.25rem 0;
}

@media screen and (max-width: 1024px) {
  .phone-menu {
    display: block;
  }
}
</style>
