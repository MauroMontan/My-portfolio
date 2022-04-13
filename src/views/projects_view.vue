<script setup lang="ts">
import { ProjectCard } from "../components/components";
</script>
<template>
  <div class="grid">
    <ProjectCard v-for="i in 12" />
  </div>
</template>

<style scoped>
.grid {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 14rem;
  gap: 2rem;
}
</style>
