<script setup lang="ts">
import iconWork from '@/components/icons/iconWork.vue'
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleWork } = useStateStore();
const { work } = storeToRefs(useStateStore());
</script>

<template>
  <button class="button-main" :class="{'button-active': work}" @click="toggleWork()">
    <iconWork />
    work
  </button>
</template>

<style scoped lang="scss">

button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

@media screen and (max-width: 1350px) {
  button {
    position: fixed;
  }
}
</style>
