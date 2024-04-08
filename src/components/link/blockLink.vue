<script setup lang="ts">
import type Link from '@/models/link'

const props = defineProps({
  link: Object as () => Link,
  index: Number,
})
</script>

<template>
  <div>
    <a :href="props.link?.url" class="link">
      {{ props.link?.name }}
    </a>
    <a v-for="(alt, index) in props.link?.alt" :key="index" :href="alt.url"
      class="link alt">
      {{ alt.name }}
    </a>
  </div>
</template>

<style scoped lang="scss">
  div {
    display: flex;
    align-items: center;
    height: 2rem;
    gap: .25rem;
    width: 100%;
  }

  .link {
    padding: 0 .5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    width: 100%;
    height: 2rem;
    color: white;
    text-decoration: none;
    color: var(--color-text);
    transition: padding-left 0.2s;
    position: relative;
    &:hover {
      background-color: v-bind("'color-mix(in srgb, var(--color-section-'+ index +'), black 8%)'");
      padding-left: 0.75rem;
    }
  }
  
  .alt {
    width: fit-content;
    color: v-bind("'color-mix(in srgb, var(--color-section-'+ index +'), black 32%)'");

    &:hover {
      color: var(--color-text);
    }
  }
</style>
