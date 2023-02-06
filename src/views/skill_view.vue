<script setup lang="ts">
import { computed } from "vue";
import { SkillCard } from "../components/components";
import { useSkills } from "../store";

const skillStore = useSkills();

const skills = computed(() => {
  return skillStore.skills;
});
</script>

<template>
  <div>
    <div class="page-title">
      <h2>Take a look at my core skills</h2>
    </div>
    <div class="skills">
      <div class="content backend-info">
   
        <SkillCard v-for="skill in skills.backend" :skill="skill" />
      </div>
      <div class="content fronted-info">
       
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
  gap: 1rem;
}
.content {
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;
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
  z-index: 3;
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
