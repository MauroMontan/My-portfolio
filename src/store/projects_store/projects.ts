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
      {
        name: "Flutter movie app",
        description:
          "Android/Ios application for providing movies data from The Movie Database",
        link: null,
        repository: "https://github.com/MauroMontan/flutter-movie-app",
        tags: [{ name: "Dart" }, { name: "Fluter" }, { name: "Provider" }],
      },
      {
        name: "Maggie´s bakery",
        description:
          "A full stack cake shop web page with authentication, shopping cart,",
        repository: "https://github.com/MauroMontan/maggies-bakery",
        link: "https://happy-hill-0f8a43210.1.azurestaticapps.net/",
        tags: [
          { name: "FastApi" },
          { name: "Typescript" },
          { name: "Vue" },
          { name: "Pinia" },
        ],
      },
      {
        name: "Sentiment detection",
        description:
          "This web app is using the Azure Cognitive Service for languaje to detect and classify emotions in quotes that people has written and shared.",
        link: "https://agreeable-plant-0c6d36310.azurestaticapps.net/",
        repository: "https://github.com/MauroMontan/Sentiment-detection",
        tags: [
          { name: "FastApi" },
          { name: "vue" },
          { name: "vuetify" },
          { name: "Azure" },
        ],
      },
      {
        name: "FastApi Postgres boilerplate",
        description:
          "This is a boilerplate for creating easy rest projects with user authentication working with PostgresQl",
        repository: "https://github.com/MauroMontan/fastApi-detaProject",
        link: null,
        tags: [{ name: "Python" }, { name: "Postgres" }, { name: "FastApi" }],
      },
      {
        name: "Eileen",
        description:
          "This is a schedule software multiplatform for manage online classes,Eileen gives your classes links at time!",
        link: null,
        repository: "https://github.com/MauroMontan/QT-Eileen",
        tags: [{ name: "Python" }, { name: "Qt5" }],
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
