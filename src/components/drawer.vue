<script setup lang="ts">
import { Overlay } from "./components";
import { useUi } from "../store";

const uiStore = useUi();
</script>

<template>
  <Transition name="nested" :duration="550">
    <Overlay
      class="outer"
      @close="uiStore.toggleDrawer"
      v-if="uiStore.isDrawerOpen"
    >
      <div class="inner drawer">
        <div class="links">
          <ul>
            <router-link
              v-for="link in uiStore.navigationLinks"
              @click="uiStore.toggleDrawer"
              :to="link.to"
              ><li>{{ link.name }}</li></router-link
            >
          </ul>
        </div>
      </div>
    </Overlay>
  </Transition>
</template>

<style scoped>
.drawer {
  background-color: #232323;
  width: 100%;
  height: 17rem;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: center;
}

.links {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
a {
  width: 100%;
  text-decoration: none;
}

ul li {
  background-color: #191919;
  width: 100%;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.8rem;
  list-style: none;
  transition: all 0.5s ease;
}

ul li:active {
  transform: scale(105%);
}

/* rules that target nested elements */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
</style>
