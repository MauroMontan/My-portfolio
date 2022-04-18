<script setup lang="ts">
import { computed } from "vue";
import { ProjectCard } from "../components/components";
import { useProjects } from "../store";

const projectsStore = useProjects();

const projects = computed(() => {
  return projectsStore.projectss;
});
</script>
<template>
  <div class="grid">
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<style scoped>
.grid {
  border-radius: 0.5rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-auto-rows: 14rem;
  gap: 2rem;
  overflow: auto;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}
</style>
