<script setup lang="ts">
import type Search from '@/models/search'
import searches from '@/data/searches.json'
import { onClickOutside } from '@vueuse/core'
import { ref, watch, type Ref } from 'vue'

const activeSearch: Ref<Search> = ref({ name: 'g', url: 'https://www.google.com/search?hl=en&', query: 'q' })
const input = ref('') 
const showList = ref(false)
const target = ref(null)

watch(input, () => {
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
    (search: Search) => search.name === bang[0].slice(1).trim())
  if(!search) return 
  input.value = input.value.replace(bang[0], '')
  activeSearch.value = search
}

function toggleList(search: any) {
  activeSearch.value = search
  const input = document.querySelector("input") as HTMLInputElement
  input.focus()
  showList.value = false
}

onClickOutside(target, event => showList.value = false)
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
          <input v-if="activeSearch.option" type="hidden" :name="activeSearch.option.name" :value="activeSearch.option.value" />
        </form>
      </div>
      <button class="button button-alt" @click="showList = !showList">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h12"></path></g></svg>
      </button>
    </div>
    <Transition>
      <div class="list" v-if="showList" ref="target">
        <button v-for="search in (searches as Search[])" :key="search.name" @click="toggleList(search)">
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
  height: 9.5rem;
  margin-top: 0.5rem;

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
}

form {
  height: 100%;
  width: 100%;
  .input {
    height: 100%;
    width: 15rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    color: var(--color-text);
    font-style: oblique;
    outline: none;
    background-color: transparent;
    transition: width 0.3s;

    // &:focus {
    //   width: 25rem;
    // }
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
  transition: opacity 0.3s, height 0.3s, margin 0.3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
  margin: 0;
}

@media screen and (max-width: 1024px) {
  .wrapper {
    position: relative;
    width: 100%;
  }
  .list {
    position: absolute;
    top: 3rem;
    z-index: 200;
    background-color: var(--color-background);
    padding: 1rem 0;
    height: 11.5rem;
  }
  form .input:focus {
    width: 100%;
  }
  .list {
    width: 100%;
  }
}
</style>
