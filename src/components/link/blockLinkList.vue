<script setup lang="ts">
import type Link from '@/models/link'
import blockLink from './blockLink.vue'
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  color: String,
  icon: String,
  links: Array<Link>,
  index: Number,
  disable: Boolean,
})

const filteredLinks = computed(
  () => props.links?.filter((link: Link) => !work.value ? link : !link.nsfw))

const { work } = storeToRefs(useStateStore());
</script>

<template>
  <div class="linklist" :class="'section-' + index" v-if="disable ? work : true">
    <h2>
      <svg v-html="icon"></svg>
      {{ title }}
    </h2>
    <nav>        
      <blockLink v-for="link in filteredLinks" :link="link" :key="link.name" :index="index" />
    </nav>
  </div>
</template>

<style scoped lang="scss">
.linklist {
  display: flex;
  flex-direction: column;
  position: relative;
}

h2 {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.15rem;
  width: fit-content;
  gap: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
  background-color: v-bind("'var(--color-section-'+ index +')'");

  svg {
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
    background-color: v-bind("'var(--color-section-'+ index +')'");
  }

  &::after {
    z-index: 10;
    border-bottom-left-radius: 0.5rem;
    background-color: var(--color-background);
  }
}

nav {
  padding: .75rem;
  display: flex;
  flex-flow: column;
  min-width: 15rem;
  height: 100%;
  gap: 0.25rem;
  overflow: hidden;
  justify-content: center;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: v-bind("'var(--color-section-'+ index +')'");
}

@media screen and (max-width: 1350px) {
  .linklist, nav {
    width: 100%;
  }
}
</style>
