<script setup lang="ts">
import type Search from '@/models/search'
import searches from '@/data/searches.json'
import { ref, watch, type ModelRef } from 'vue'

const activeSearch: ModelRef<Search> = defineModel({required: true})
const input = ref('') 

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
</script>

<template>
  <form :action="activeSearch.url">
    <input v-model="input" type="text" :name="activeSearch.query" autocomplete="off" autofocus placeholder="...">
    <input v-if="activeSearch.option" type="hidden" :name="activeSearch.option.name" :value="activeSearch.option.value" />
  </form>
</template>

<style scoped lang="scss">
form {
  height: 100%;
  width: 100%;
}

input {
  height: 100%;
  width: 15rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  font-style: oblique;
  outline: none;
  background-color: transparent;
  transition: width 0.3s;
}
@media screen and (max-width: 1350px) {
  input {
    width: 100%;
  }
}
</style>
