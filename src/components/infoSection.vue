<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="space">
      <h1>NetStart</h1>
      <p>Simple startpage implementing DuckDuckGo bangs, themes, and a link list.</p>
    </div>
    <div class="space">
      <h2>How to use</h2>
      <p>Type <span class="code">!xx text</span> to search <span class="code">text</span> on <span class="code">xx</span>
      </p>
      <p>For example <span class="code">!yt funny cats</span> to find funny cat videos on youtube.</p>
      <p>Or select the desired search engine in the list</p>
    </div>
    <div>
    </div>
    <div class="space">
      <div>
        <p>Information and source @</p>
        <a href="https://github.com/calamina/net">github.com/calamina/net</a>
      </div>
      <div>
        <p>Made in 2024</p>
        <span>by </span><a href="https://github.com/calamina">calamina</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 35rem;
  padding: 1.25rem;
  z-index: 2000;
  height: 100vh;
  background-color: var(--color-section-0);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 4rem;
}

.space {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

h1,
h2 {
  font-size: 1rem;
  font-weight: 200;
  color: var(--color-section-2);
  margin: 0;
  padding: 0;
}

a,
p {
  width: 25rem;
}

p {
  line-height: 1.7;
}

a {
  color: var(--color-text);
  color: var(--color-section-2);
}

.code {
  background-color: var(--color-background);
  background-color: var(--color-section-1);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
</style>
