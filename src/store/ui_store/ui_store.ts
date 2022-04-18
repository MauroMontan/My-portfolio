import { defineStore } from "pinia";

const useUi = defineStore("ui", {
  state: () => ({
    drawer: false,
    menuItems: [
      { to: "/about", name: "About me" },
      { to: "/skills", name: "Skills" },
      { to: "/projects", name: "Projects" },
      { to: "/contact", name: "Contact me" },
    ],
  }),
  getters: {
    isDrawerOpen: (state) => state.drawer,
    navigationLinks: (state) => state.menuItems,
  },
  actions: {
    toggleDrawer(): void {
      this.drawer = !this.drawer;
    },
  },
});

export default useUi;
