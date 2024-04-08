<script setup lang="ts">
import iconInfo from '@/components/icons/iconInfo.vue'
import { useStateStore } from '@/store/state'
import { storeToRefs } from 'pinia'

const { toggleInfo } = useStateStore();
const { info } = storeToRefs(useStateStore());
</script>

<template>
  <button class="button-main" @click="toggleInfo()" :class="{'button-active': info}">
    <iconInfo />
    about
  </button>
</template>

<style scoped lang="scss">
button {
  margin-top: 1rem;
  margin-right: 1rem;
}

@media screen and (max-width: 1350px) {
  button {
    position: fixed;
    top: unset;
    bottom: 1rem;
    right: 0rem;
    left: 0rem;
    margin: 0 auto;
  }
}
</style>
