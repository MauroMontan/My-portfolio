<script setup lang="ts"></script>
<template>
  <nav>
    <div class="title">
      <i class="fa-solid fa-house"></i>
    </div>

    <div class="burguer">
      <i class="fa-solid fa-burger"></i>
    </div>
    <div class="links">
      <ul>
        <li><router-link to="/about"> About me </router-link></li>
        <li>Projects</li>
        <li>Contact me</li>
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

i {
  color: #41b883;
}

.burguer {
  display: none;
}

.links {
  height: 100%;
  width: 25rem;
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

@media (max-width: 768px) {
  nav {
    width: 90%;
  }

  .links {
    display: none;
  }
  .burguer {
    display: flex;
  }
}
</style>
