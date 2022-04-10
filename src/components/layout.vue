<script setup lang="ts"></script>

<template>
  <div class="layout">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot name="default"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  height: 4rem;
  width: 100%;
  background: #232323;
}

main {
  height: 100%;
  background-color: black;
}

footer {
  height: 2rem;
  background-color: red;
}
</style>
