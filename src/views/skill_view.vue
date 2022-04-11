<script setup lang="ts">
import { reactive } from "vue";
import { SkillCard } from "../components/components";

const skills = reactive({
  backend: [
    {
      technology: "FastApi",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      description:
        "I have been creating fast and usefull REST-APIS, hosted on deta and azue. with postgresql and NosSQL deta database",
    },
    {
      technology: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      description: "azure",
    },
    {
      technology: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "backend rest framework",
    },
  ],
});
</script>

<template>
  <div class="skills">
    <div class="content backend-info">
      <div class="title">
        <h2>Back-end skills</h2>
      </div>
      <SkillCard v-for="skill in skills.backend" :skill="skill" />
    </div>
    <div class="content fronted-info">
      <div class="title"><h2>Front-end Skills</h2></div>
    </div>
  </div>
</template>

<style scoped>
.skills {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.content {
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;

  position: relative;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  position: absolute;
  top: -0.5rem;
  right: -1rem;
  background-color: tomato;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);

  padding: 0.5rem;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .skills {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
