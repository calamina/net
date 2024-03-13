<script setup lang="ts">
import searches from '@/data/searches.json'
import { ref, watch } from 'vue'

const activeSearch = ref({ name: 'g', url: 'https://www.google.com/search?hl=en&', query: 'q' })
const input = ref('') 
const showList = ref(false)

watch(input, (value) => {
  setSearch()
})

function setSearch() {
  const http: RegExpMatchArray | string | null = input.value.match(/^http[a-z]?[:][/][/]/); 
  if(http) input.value = input.value.replace(http[0], '')

  const net: RegExpMatchArray | string | null = input.value.match(/[a-z0-9]+[.|:][a-z0-9]+/); 
  if(net) {
    activeSearch.value.url = `${'https://'}${input.value}`
    activeSearch.value.query = ''
    return
  }
  
  const bang: RegExpMatchArray | string | null = input.value.match(/[!][a-z0-9]+[ ]$/); 
  if(!bang?.length) return
  const search  = searches.find(
    search => search.name === bang[0].slice(1).trim())
  if(!search) return 
  input.value = input.value.replace(bang[0], '')
  activeSearch.value = search
}

function toggleList(search: any) {
  activeSearch.value = search
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
    <form :action="activeSearch.url">
      <input v-model="input" class="input" type="text" :name="activeSearch.query" autocomplete="off" autofocus placeholder="...">
    </form>
    </div>
    <button class="button button-alt" @click="showList = !showList">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h12"></path></g></svg>
    </button>
    </div>
    <Transition>
      <div class="list" v-if="showList">
        <button v-for="search in searches" :key="search.name" @click="toggleList(search)">
          {{search.name}}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 25rem;
}

.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;
}

.list {
  width: 25rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  overflow: hidden;
  max-height: 30rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    height: 2rem;
    border-radius: 0.5rem;
    color: var(--color-text);
    background-color: var(--color-background-clear);
    transition: background-color 0.4s;
  }
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
  transition: background-color 0.4s;
}

form {
  height: 100%;
  width: 100%;
  .input {
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--color-text);
    font-style: oblique;
    outline: none;
    background-color: transparent;
  }
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-text);
  width: 5rem;
  background-color: var(--color-background);
  transition: background-color 0.4s;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
