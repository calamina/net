<script setup lang="ts">
import searches from '@/data/searches.json'
import { ref } from 'vue'

const activeSearch = ref({ name: 'g', url: 'https://www.google.com/search?hl=en&', query: 'q' })

const input = ref('') 

function setSearch() {
  const net: RegExpMatchArray | string = input.value.match(/[!][a-z0-9]+$/)!; 
  
  if(!net?.length) return
  
  const search  = searches.find(
    search => search.name === net[0].slice(1))

  if(!search) return 

  input.value = input.value.replace(net[0], '');
  activeSearch.value = search
}
</script>

<template>
  <div class="search">
    <form :action="activeSearch.url">
      <input v-model="input" @keyup="setSearch()" class="input" type="text" :name="activeSearch.query" autocomplete="off" autofocus placeholder="...">
    </form>
    <button class="button">
      {{activeSearch.name}}
    </button>
  </div>
</template>

<style scoped lang="scss">

.search {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #66a886;
  height: 3rem;
}

form {
  height: 100%;
  .input {
    height: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    background-color: transparent;
  }
}

.button {
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  color: #242424;
  width: 5rem;
  background-color: #468263;
}
</style>
