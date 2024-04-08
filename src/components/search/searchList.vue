<script setup lang="ts">
import type Search from '@/models/search'
import searches from '@/data/searches.json'

const activeSearch = defineModel()
const emit = defineEmits(['select'])

function toggleList(search: any) {
  activeSearch.value = search
  emit('select')
}
</script>

<template>
  <div>
    <button v-for="search in (searches as Search[])" :key="search.name" @click="toggleList(search)">
      {{search.name}}
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  width: 25rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  overflow: hidden;
  height: 9.5rem;
  margin-top: 0.5rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: var(--color-background-clear);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s, height 0.3s, margin 0.3s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
  margin: 0;
}

@media screen and (max-width: 1350px) {
  div {
    width: 100%;
  }
}
</style>
