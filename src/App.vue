<script setup lang="ts">
import { Header, Footer, Layout } from "./components/components";
</script>

<template>
  <Layout>
    <template v-slot:header>
      <Header />
    </template>

    <router-view v-slot="{ Component }">
      <Transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <template v-slot:footer>
      <Footer />
    </template>
  </Layout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap");

::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat Alternates", sans-serif;
  color: white;
}

#app {
  background-color: blue;
  height: 100vh;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
