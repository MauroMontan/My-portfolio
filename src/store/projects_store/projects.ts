import { defineStore } from "pinia";
import { Project } from "../../interfaces/interfaces";

const useProjects = defineStore("projects", {
  state: () => ({
    projects: [
      {
        name: "Pokedex",
        description: "web app for providing pokemon data by id or name",
        link: "https://mango-cliff-0858e8b10.1.azurestaticapps.net/",
        repository: "https://github.com/MauroMontan/pokedex2.0",
        tags: [{ name: "Typescript" }, { name: "Vue" }, { name: "Pinia" }],
      },
    ] as Array<Project>,
  }),
  getters: {
    projectss: (state) => state.projects,
  },
  actions: {
    sayHi() {
      console.log("hello");
    },
  },
});

export default useProjects;
