<script setup lang="ts">
import { reactive } from "vue";

const Menu = reactive({
  links: [
    { to: "/about", name: "About me" },
    { to: "/skills", name: "Skills" },
    { to: "/about", name: "Projects" },
    { to: "/about", name: "Contact me" },
  ],
});
</script>
<template>
  <nav>
    <div class="title">
      <router-link to="/">
        <i class="home fa-solid fa-house"></i>
      </router-link>
    </div>

    <div class="burguer">
      <i class="fa-solid fa-burger"></i>
    </div>
    <div class="links">
      <ul>
        <li v-for="link in Menu.links">
          <router-link :to="link.to"> {{ link.name }} </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
}

i {
  color: #41b883;
  font-size: 1.5rem;
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

.links ul li a:hover {
  color: #41b883;
  font-weight: bold;
}

.links ul li a {
  text-decoration: none;
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
  .home {
    color: #191919;
  }
}
</style>
