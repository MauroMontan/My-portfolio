<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="toolbar">
      <h2>flutter movie app</h2>

      <div class="actions">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-square-arrow-up-right"></i>
      </div>
    </div>

    <div class="content">
      <p>eirmod tempor invidunt ut labore e est Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="tags">
      <div class="tag" v-for="i in 3">
        <h5>Typescript</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #232323;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  flex-direction: column;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: justify;
  align-items: center;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar .actions {
  height: 100%;
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
  font-size: 1.3rem;
}

.tags {
  display: flex;
  gap: 1rem;
}

.tags .tag {
  font-size: 0.9rem;
  background-color: #41b883;
  width: min-content;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);

  padding: 0.3rem;
  border-radius: 0.4rem;
}

.toolbar h2 {
  font-size: 1rem;
}

.tags .tag h5 {
  color: #191919;
}
</style>
