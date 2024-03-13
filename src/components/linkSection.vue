<script setup lang="ts">
import type Link from '@/models/link'
import { useStorage } from '@vueuse/core'

const props = defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>,
  index: Number,
})

const color = 'var(--color-section-' + props.index + ')'
const colorAlt = 'var(--color-section-alt-' + props.index + ')'
const colorAlt2 = 'var(--color-section-alt-sub-' + props.index + ')'

const work = useStorage('work-active', false)
</script>

<template>
  <div class="link-section" v-if="title === 'work' ? work : true">
    <h2 class="link-section__title">
      <svg class="link-section__title__icon" v-html="icon" alt="icon"></svg>
      {{ title }}
    </h2>
    <nav class="link-section__list">
      <div class="link-section__link" v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="link-section__item">
          {{ link.name }}
        </a>
        <a v-for="(alt, index) in link.alt" :key="index" :href="alt.url"
          class="link-section__item link-section__item--alt">
          {{ alt.name }}
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
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;
    transition: background-color 0.4s;

    &__icon {
      width: 1rem;
      height: 1rem;
    }

    &::before,
    &::after {
      position: absolute;
      right: -0.5rem;
      bottom: 0;
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      transition: background-color 0.4s;
    }

    &::before {
      z-index: 50;
      background-color: v-bind(color);
    }

    &::after {
      z-index: 100;
      border-bottom-left-radius: 0.5rem;
      background-color: var(--color-background);
    }
  }

  &__list {
    padding: .75rem;
    display: flex;
    flex-flow: column;
    width: 15rem;
    height: 100%;
    gap: 0.25rem;
    justify-content: center;
    background-color: v-bind(color);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    transition: background-color 0.4s;
  }

  &__link {
    display: flex;
    align-items: center;
    height: 2rem;
    gap: .25rem;
    width: 100%;
  }

  &__item {
    padding: 0 .5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    width: 100%;
    height: 2rem;
    color: white;
    text-decoration: none;
    color: #242424;
    transition: padding-left 0.2s;
    position: relative;

    &:hover {
      color: #242424;
      background-color: v-bind(colorAlt);
      padding-left: 0.75rem;
    }

    &--alt {
      color: v-bind(colorAlt2);
      width: fit-content;
    }
  }
}
</style>
