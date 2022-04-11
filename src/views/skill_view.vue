<script setup lang="ts">
import { reactive } from "vue";
import { SkillCard } from "../components/components";

const skills = reactive({
  backend: [
    {
      technology: "FastApi",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      description:
        "I have been creating fast and usefull REST-APIS, hosted on deta and azue. with postgresql and NoSQL deta database",
    },
    {
      technology: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      description:
        "I´m using azure in most of my projects for hosting and IA services, I have and AZ-900 Azure fundamentals certification",
    },
    {
      technology: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description:
        "As easy as FastApi, i have created REST APIS with POSTGRES and deta NoSQL database, with the power of Typescript",
    },
  ],
  fronted: [
    {
      technology: "Vue js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      description:
        "I have no words to describe how i love Vue3 and its ecosystem, working with Pinia and vue-router is extremly fast, reactiveness and scoped css si awesome",
    },
    {
      technology: "Vuetify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
      description:
        "vuetify makes a vue 2 app looks better avoiding complex css code, achieving great layouts and transitions in a matter of minutes ",
    },
    {
      technology: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description:
        "As a web developer, i think desktop and mobile integrations are essential for users, and flutter bring things Qt dont for multiplatform support",
    },
  ],
});
</script>

<template>
  <div>
    <div class="page-title">
      <h2>Take a look of my principal skills</h2>
    </div>
    <div class="skills">
      <div class="content backend-info">
        <div class="title">
          <h2>Back-end skills</h2>
        </div>
        <SkillCard v-for="skill in skills.backend" :skill="skill" />
      </div>
      <div class="content fronted-info">
        <div class="title"><h2>Front-end Skills</h2></div>
        <SkillCard v-for="skill in skills.fronted" :skill="skill" />
      </div>
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
  gap: 0.8rem;
  position: relative;
  border-radius: 0.5rem;
  flex-direction: column;
}

.page-title h2 {
  background-image: -webkit-linear-gradient(70deg, #fffb7d 0%, #85ffbd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.page-title {
  margin-bottom: 1rem;
}

.title {
  position: absolute;
  top: -0.5rem;
  right: -1rem;
  background-color: #4db9b4;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);

  padding: 0.3rem;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .skills {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    top: -1rem;
    font-size: 0.8rem;
  }
}
</style>
