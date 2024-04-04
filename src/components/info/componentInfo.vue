<script setup lang="ts">
import blockInfo from '@/components/info/blockInfo.vue'
import buttonInfo from '@/components/info/buttonInfo.vue'
import { useStateStore } from '@/store/state'
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const target = ref(null)
const { info } = storeToRefs(useStateStore());
const { toggleInfo } = useStateStore();

onClickOutside(target, event => toggleInfo(false))
</script>

<template>
  <div class="wrapper" ref="target">
    <buttonInfo />
    <Transition name="fade">
      <blockInfo v-if="info" />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  z-index: 900;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  align-items: end;
  gap: 0;
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
