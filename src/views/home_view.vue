<script setup lang="ts">
import { InfoCard } from "../components/components";
</script>

<template>
  <div class="container">
    <div class="content">
      <img src="../assets/avatar.svg" alt="" />

      <div class="intro">
        <h4>Hello! I am</h4>
        <h1>Mauro Montaño</h1>

        <h3>I am a full stack developer.</h3>
      </div>
    </div>

    <div class="info">
      <InfoCard />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
}

.content {
  display: flex;
  align-items: center;

  justify-content: center;
}

.content .intro {
  display: flex;
  justify-content: center;
  text-align: left;
  flex-direction: column;
}

img {
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
}

.content h1 {
  margin-bottom: 1rem;
  font-size: 3rem;
  background-image: -webkit-linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info {
  display: flex;
  align-items: center;

  justify-content: end;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
  .info {
    justify-content: center;
  }

  .content h1 {
    font-size: 2rem;
  }
  img {
    width: 50%;
    height: 50%;
  }
}
</style>
