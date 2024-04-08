<script setup lang="ts">
import iconTheme from '@/components/icons/iconTheme.vue'
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleTheme } = useStateStore();
const { theme } = storeToRefs(useStateStore());
</script>

<template>
  <button class="button-main" @click="toggleTheme()" :class="{'button-active': theme}">
    <iconTheme />
    theme
  </button>
</template>
