import { defineStore } from "pinia";
import { Skill } from "../../interfaces/interfaces";

const useSkills = defineStore("skills", {
  state: () => ({
    skillList: {
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
      ] as Array<Skill>,
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
      ] as Array<Skill>,
    },
  }),
  getters: {
    skills: (state) => state.skillList,
  },
  actions: {},
});

export default useSkills;
