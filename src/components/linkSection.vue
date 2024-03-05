<script setup lang="ts">
import type Link from '@/models/link'

defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>
})
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
          :href="link.url" 
          class="link-section__item"
          target="_blank">
          {{ link.name }}
          <!-- {{ link.name + (link.search ? ' ::' : '') }} -->
        </a>
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
    justify-content: center;
    gap: .75rem;
    border: 1px solid v-bind(color);
  }

  &__link {
    display: flex;
    align-items: center;
    height: 1.5rem;

    &:hover {
      background-color: v-bind(color);
    }
  }
  
  &__item {
    width: 10rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    color: v-bind(color);
    transition: padding-left 0.2s;

    &:hover {
      padding-left: 0.5rem;
      color: #242424;
      font-style: oblique;
    }
  }
}
</style>
