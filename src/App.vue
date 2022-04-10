<script setup lang="ts">
import { Header, Footer, Layout } from "./components/components";
</script>

<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <router-view />

    <template v-slot:footer>
      <Footer />
    </template>
  </Layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
}
body {
  height: 100%;
}

#app {
  background-color: blue;
  height: 100vh;
}
</style>
