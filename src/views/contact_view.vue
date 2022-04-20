<script setup lang="ts">
import { ContactForm } from "../components/components";
</script>

<template>
  <div class="container">
    <div class="banner">
      <img src="../assets/contact.svg" alt=" contact illustration by Undraw " />
    </div>
    <div class="form">
      <ContactForm />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
}
.banner {
  width: 100%;
  height: 100%;
}

.banner img {
  width: 100%;
  height: 100%;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner {
    display: none;
  }
}
</style>
