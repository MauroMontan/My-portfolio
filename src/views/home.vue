<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="content">
      <h4>Hello! I am ..</h4>
      <h1>Mauro Montaño</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        maiores tempore dicta mollitia inventore. Debitis ipsum totam quibusdam
        qui reprehenderit, iste vel, esse animi, commodi odio voluptatum!
        Officiis, aut fugiat.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
}

.content p {
  line-height: 2rem;
}
.content h1 {
  margin-bottom: 3rem;
}
</style>
