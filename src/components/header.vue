<script setup lang="ts"></script>
<template>
  <nav>
    <div class="title">
      <h2>Mauro <b>Montaño</b></h2>
    </div>

    <div class="links">
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
}

.links {
  height: 100%;
  width: 20rem;
}
.links ul {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.links ul li {
  list-style: none;
  cursor: pointer;
}
</style>
