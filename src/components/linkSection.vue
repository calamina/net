<script setup lang="ts">
import type Link from '@/models/link'
import { ref, type Ref } from 'vue'
import { useStorage } from '@vueuse/core'

defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>,
})

const flag = useStorage('work-active', false) // returns Ref<boolean>


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
  <div class="link-section" v-if="title === 'work' ? flag : true">
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
        <a 
          v-for="(alt, index) in link.alt" :key="index"
          :href="alt.url" 
          class="link-section__item link-section__item--alt">
          {{ alt.name }}
        </a>
        <form class="link-section__form" v-if="link.search && activeSearch === index" :action="link.search.url">
          <input @blur="switchSearch(index)" :id="'search' + index" class="link-section__search" type="text" :name="link.search.query" autocomplete="off" />
        </form>
        <button v-if="link.search && activeSearch !== index" class="link-section__switch" @click="switchSearch(index)">◈</button>
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
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;

    &__icon {
      width: 1rem;
      height: 1rem;
    }

    &::before, &::after {
      position: absolute;
      right: -0.5rem;
      bottom: 0;
      content: '';
      width: 0.5rem;
      height: 0.5rem;
    }

    &::before {
      z-index: 50;
      background-color: v-bind(color);
    }
    &::after {
      z-index: 100;
      border-bottom-left-radius: 0.5rem;
      background-color: #242424;
    }
  }

  &__list {
    padding: .5rem;
    display: flex;
    flex-flow: column;
    width: 15rem;
    height: 100%;
    gap: 0.25rem;
    justify-content: center;
    border: 4px solid v-bind(color);
    background-color: v-bind(color);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &__link {
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 1rem;
    width: 100%;
  }
  
  &__item {
    padding: 0 .5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2rem;
    color: white;
    text-decoration: none;
    color: #242424;
    transition: padding-left 0.2s;
    position: relative;
    
    &:hover {
      background-color: v-bind(color);
      color: #242424;
      padding-left: 0.75rem;
      
      &::before {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        padding-right: 0.5rem;
        background-color: #242424;
        border-radius: 0.5rem;
        opacity: 0.15;
      }
    }

    &--alt {
      opacity: 0.6;
      width: fit-content;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__search {
    font-size: 1rem;
    height: 2rem;
    border: none;
    color: #242424;
    padding: 0 0.5rem;
    font-style: oblique;
    background-color: v-bind(color);
    outline: none;
    width: 11.5rem;
  } 

  &__switch {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: transparent;
    color: v-bind(color);
    color: #242424;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
