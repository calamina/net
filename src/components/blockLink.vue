<script setup lang="ts">
import type Link from '@/models/link'
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>,
  index: Number,
})

const filteredLinks = computed(
  () => props.links?.filter((link: Link) => !work.value ? link : !link.nsfw))

const { work } = storeToRefs(useStateStore());
</script>

<template>
  <div class="link-section" :class="'section-' + index" v-if="title === 'work' ? work : true">
    <h2 class="link-section__title">
      <svg class="link-section__title__icon" v-html="icon" alt="icon"></svg>
      {{ title }}
    </h2>
    <nav class="link-section__list">
      <div class="link-section__link" v-for="(link, index) in filteredLinks" :key="index">
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
    color: #242424;
    padding: 0.5rem 1.15rem;
    width: fit-content;
    gap: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;

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
    }

    &::before {
      z-index: 5;
    }

    &::after {
      z-index: 10;
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
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
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
      padding-left: 0.75rem;
    }

    &--alt {
      width: fit-content;
    }
  }
}

@for $i from 0 through 4 {
  .section-#{$i} {
    .link-section__title {
      background-color: var(--color-section-#{$i});
      &::before {
        background-color: var(--color-section-#{$i});
      }
    }
    .link-section__list {
      background-color: var(--color-section-#{$i});
    }
    .link-section__item {
      &:hover {
        background-color: color-mix(in srgb, var(--color-section-#{$i}), black 8%);
      }
      &--alt {
        background-color: var(--color-section-#{$i});
        color: color-mix(in srgb, var(--color-section-#{$i}), black 32%);
        &:hover {
          color: var(--color-text);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .link-section, .link-section__list {
    width: 100%;
  }

  .link-section__list {
    gap: 0.25rem 1rem;
  }
}
</style>
