<script setup lang="ts">
interface Skill {
  technology: string;
  icon: string;
  description: string;
}

defineProps<{
  skill: Skill;
}>();
</script>

<template>
  <div class="card">
    <div class="icon">
      <img :src="skill.icon" alt="skill image" />
    </div>
    <div class="about">
      <h3>{{ skill.technology }}</h3>
      <p>
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  height: 8rem;
  background-color: #232323;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: all 0.5s ease-out;
  user-select: none;
}

.card:hover {
  transform: translateX(-1rem);
}

.card .icon {
  padding: 0.5rem;
  width: 20%;
}

.card .icon img {
  width: 100%;
  height: 100%;
}

.about {
  padding: 1rem;
  width: 80%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.about p {
  color: #4db9b4;
  font-size: 1.1rem;
}
.about h3 {
  color: #5f8dec;
}

@media (max-width: 768px) {
  .about p {
    font-size: 0.8rem;
  }
}
</style>
