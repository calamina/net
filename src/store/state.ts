import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStateStore = defineStore('states', () => {
  
  const work = ref(useStorage('work-active', false));
  const theme = ref(useStorage('theme', false));
  const info = ref(false);

  function toggleWork(value?: boolean) {
    value === false ? work.value = value : work.value = !work.value;
  }

  function toggleTheme(value?: boolean) {
    value === false ? theme.value = value : theme.value = !theme.value;
  }

  function toggleInfo(value?: boolean) {
    value === false ? info.value = value : info.value = !info.value;
  }

  return {
    work,
    theme,
    info,
    toggleWork,
    toggleTheme,
    toggleInfo
  }
})
