<script setup lang="ts">
import { computed } from "vue";
import { Project } from "../interfaces/interfaces";

const props = defineProps<{
  project: Project;
}>();

const hasLink = computed(() => {
  if (!props.project.link) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <div class="card">
    <div class="toolbar">
      <h2>{{ project.name }}</h2>

      <div class="actions">
        <a
          :href="project.repository"
          target="_blank"
          class="fa-brands fa-github"
        />

        <a
          v-if="hasLink"
          :href="project.link"
          target="_blank"
          class="fa-solid fa-square-arrow-up-right"
        ></a>
      </div>
    </div>

    <div class="content">
      <p>{{ project.description }}</p>
    </div>

    <div class="tags">
      <div class="tag" v-for="tag in project.tags">
        <h5>{{ tag.name }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #232323;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-0.1rem);
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: justify;
  align-items: center;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toolbar .actions {
  height: 100%;
  display: flex;
  align-items: center;
  width: fit-contentt;
  justify-content: space-between;
  font-size: 1.3rem;
}

.tags {
  display: flex;
  gap: 1rem;
}

.tags .tag {
  font-size: 1rem;
  background-color: #41b883;
  width: min-content;
  padding: 0.4rem;
  border-radius: 0.4rem;
}

.actions a {
  text-decoration: none;
  cursor: pointer;
}
.actions a:first-child {
  margin-right: 1rem;
}

.actions a:hover {
  color: #41b883;
}

.toolbar h2 {
  font-size: 1rem;
}

.tags .tag h5 {
  color: #191919;
}

@media (max-width: 768px) {
  .tags {
    gap: 0.8rem;
  }
  .tags .tag h5 {
    font-size: 0.7rem;
  }
}
</style>
