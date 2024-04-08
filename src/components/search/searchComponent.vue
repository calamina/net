<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type Search from '@/models/search'
import searchList from './searchList.vue';
import searchInput from './searchInput.vue';

const activeSearch: Ref<Search> = ref({ name: 'g', url: 'https://www.google.com/search?hl=en&', query: 'q' })
const showList = ref(false)

function listSelected() {
  const input = document.querySelector("input") as HTMLInputElement
  input.focus()
}
</script>

<template>
  <div class="wrapper">
    <div class="search-bar">
      <div class="search">
        <div class="button">
          {{activeSearch.name}}
        </div>
        <searchInput v-model="activeSearch" />
      </div>
      <button class="button button-alt" @click="showList = !showList">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h12"></path></g></svg>
      </button>
    </div>
    <Transition>
      <searchList v-if="showList" v-model="activeSearch" @select="listSelected()" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;
}

.search {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  align-self: center;
  height: 100%;
  width: 100%;
  background-color: var(--color-background-clear);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  width: 5rem;
  background-color: var(--color-background);
}
.button-alt {
  background-color: var(--color-background-clear);
  width: 3rem;
  cursor: pointer;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
}

@media screen and (max-width: 1350px) {
  .wrapper {
    width: 100%;
  }
}
</style>
