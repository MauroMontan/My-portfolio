<script setup lang="ts">
defineEmits<{
  (event: "close"): void;
}>();
</script>

<template>
  <div @click.self="$emit('close')" class="overlay">
    <slot></slot>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0.5rem);
  height: 100%;
  z-index: 20;
  overflow: hidden;
  width: 100%;
  position: fixed;
}
</style>
