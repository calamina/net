<script setup lang="ts">
import type Link from '@/models/link'
import { ref, type Ref } from 'vue'

const props = defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>
})

const activeSearch: Ref<number | null> = ref(null)

const switchSearch = (index: number) => {
  activeSearch.value !== index ? activeSearch.value = index : activeSearch.value = null
  if(activeSearch.value == index) {
    setTimeout(() => {
      const input = document.getElementById('search' + index) as HTMLInputElement
      input?.focus()
    }, 0)
  }
}
</script>

<template>
  <div class="link-section">
    <h2 class="link-section__title">
      <svg class="link-section__title__icon" v-html="icon" alt="icon"></svg>
      {{ title }}
    </h2>
    <nav class="link-section__list">
      <div class="link-section__link" v-for="(link, index) in links" :key="index">
        <a 
          v-if="activeSearch !== index"
          :href="link.url" 
          class="link-section__item"
          target="_blank">
          {{ link.name }}
        </a>
        <form class="link-section__form" v-if="activeSearch === index" :action="'https://www.senscritique.com/search?'">
          <input @blur="switchSearch(index)" :id="'search' + index" class="link-section__search" type="text" name="query" autocomplete="off" />
        </form>
        <button v-if="link.search && activeSearch !== index" class="link-section__switch" @click="switchSearch(index)">•</button>
        <button v-if="link.search && activeSearch === index" class="link-section__switch" @click="switchSearch(index)">•</button>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.link-section {
  display: flex;
  flex-direction: column;
  position: relative;

  &__title {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 100;
    background-color: v-bind(color);
    color: #242424;
    padding: 0.5rem 1rem;
    width: fit-content;
    gap: 0.5rem;

    &__icon {
      width: 1rem;
      height: 1rem;
    }
  }

  &__list {
    padding: 1rem;
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    gap: 0.25rem;
    justify-content: center;
    border: 1px solid #242424;
    border: 1px solid v-bind(color);
    
    &:hover {
      border: 1px solid v-bind(color);
    }
  }

  &__link {
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 0.5rem;
  }
  
  &__item {
    font-size: 1rem;
    display: flex;
    align-items: center;
    width: 10rem;
    height: 2rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    color: v-bind(color);
    transition: padding-left 0.2s;

    &:hover {
      background-color: v-bind(color);
      padding-left: 0.5rem;
      color: #242424;
      font-style: oblique;
    }
  }

  &__search {
    font-size: 1rem;
    width: 10rem;
    height: 2rem;
    border: none;
    color: v-bind(color);
    color: #242424;
    padding: 0 0.5rem;
    font-style: oblique;
    background-color: transparent;
    background-color: v-bind(color);
    outline: none;
    border-bottom: 1px solid v-bind(color);
    transition: padding-left 0.2s;
  } 

  &__switch {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: transparent;
    color: v-bind(color);
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
