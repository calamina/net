<script setup lang="ts">
</script>

<template>
  <button>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28"></path></g></svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a2 2 0 0 1 2 2a2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2a2 2 0 0 0-2-2z"></path><path d="M12 5v16"></path><path d="M7 7h1"></path><path d="M7 11h1"></path><path d="M16 7h1"></path><path d="M16 11h1"></path><path d="M16 15h1"></path></g></svg>
    about
  </button>
</template>

<style scoped lang="scss">

button {
  position: fixed;
  display: flex;
  align-items: center;
  top: 1rem;
  right: 1rem;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--color-text);
  height: 2rem;
  background-color: var(--color-background);

  svg {
    width: 1rem;
    height: 1rem;
  }
}

@media screen and (max-width: 1024px) {
  button {
    top: unset;
    bottom: 1rem;
    right: 0rem;
    left: 0rem;
    margin: 0 auto;
    z-index: 999;
  }
}
</style>
