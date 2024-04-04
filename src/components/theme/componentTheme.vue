<script setup lang="ts">
import blockTheme from '@/components/theme/blockTheme.vue'
import buttonTheme from '@/components/theme/buttonTheme.vue'
import { useStateStore } from '@/store/state'
import { onClickOutside, useColorMode } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const target = ref(null)
const { theme } = storeToRefs(useStateStore());
const { toggleTheme } = useStateStore();
const colorMode = useColorMode({  emitAuto: true,  attribute: 'theme'})

onClickOutside(target, event => toggleTheme(false))
</script>

<template>
  <div class="wrapper" ref="target">
    <Transition name="fade" mode="out-in">
      <blockTheme v-if="theme" />
    </Transition>
    <buttonTheme />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-flow: column;
  gap: 1rem;
}

// TRANSITION
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}
</style>
