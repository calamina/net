<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div>
      <h1>NetStart</h1>
      <p>Simple startpage implementing DuckDuckGo bangs, link lists and themes.</p>
    </div>
    <div>
      <h2>Usage</h2>
      <p>- Type <span class="code">!xx text</span> to search <span class="code">text</span> on <span class="code">xx</span>
      </p>
      <p>- For example <span class="code">!yt funny cats</span></p>
      <p>- Or select a search engine in the list</p>
      <p>- <span class="code">work</span> button disables nsfw links</p>
    </div>
    <div>
      <h2>Customization</h2>
      <p>- Edit links in <span class="code">links.json</span></p>
      <p>- Edit searches in <span class="code">searches.json</span></p>
      <p>- Edit themes in <span class="code">themes.css</span></p>
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
  padding: 1.25rem 1.5rem 1rem;
  z-index: 2000;
  height: 100vh;
  background-color: var(--color-background-clear);
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
  padding-bottom: 1rem;
}

a,
p {
  width: 25rem;
}

p, span {
  line-height: 1.9;
  color: var(--color-text);
}

a {
  color: var(--color-section-2);
}

.code {
  background-color: var(--color-section-1);
  color: var(--color-section-4);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}
</style>
