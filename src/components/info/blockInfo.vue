<template>
  <div class="container">
    <div class="content">
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
          <h2>More</h2>
          <p>Information and source @</p>
          <a href="https://github.com/calamina/net">github.com/calamina/net</a>
        </div>
        <div>
          <p>Made in 2024</p>
          <span>by </span><a href="https://github.com/calamina">calamina</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: fit-content;
  width: fit-content;
  background-color: var(--color-background);
  padding: 1rem;
}
.content {
  padding: 0.75rem 1rem;
  overflow: auto;
  border-radius: 0.5rem;
  background-color: var(--color-background-clear);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
}

.space {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.code {
  background-color: var(--color-section-1);
  color: var(--color-section-4);
  border-radius: 0.5rem;
  padding: 0.15rem 0.25rem;
}

h1,
h2 {
  color: var(--color-section-2);
  margin: 0;
  padding: 0;
  padding-bottom: 0.5rem;
}

a,
p {
  width: 25rem;
  line-height: 1.8;
}

a {
  color: var(--color-section-2);
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.1s, transform 0.1s;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

@media screen and (max-width: 1350px) {
  .container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: calc(100vh - 3rem);
    z-index: 200;
    padding: 1rem;
  }
  .content {
    width: 100%;
  }
}
</style>
