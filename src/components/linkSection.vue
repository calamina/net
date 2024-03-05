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
      <a 
        v-for="(link, index) in links" 
        :key="index" 
        :href="link.url" 
        class="link-section__item"
        target="_blank">
        {{ link.name }}
      </a>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.link-section {
  display: flex;
  flex-direction: column;
  border: 1px solid v-bind(color);
  margin-top: 2.5rem;
  padding: 1rem;
  position: relative;

  &__title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 100;
    background-color: v-bind(color);
    color: #242424;
    padding: 0.5rem 1rem;
    width: fit-content;
    transform: translate(-1px, -100%);
    gap: 0.5rem;

    &__icon {
      width: 1rem;
      height: 1rem;
    }
  }

  &__list {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    gap: .5rem;
  }
  
  &__item {
    width: 10rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    padding: 0.25rem 0;
    color: v-bind(color);
    transition: padding-left 0.2s;

    &:hover {
      padding-left: 0.5rem;
      background-color: v-bind(color);
      color: #242424;
      font-style: oblique;
    }
  }
}
</style>
