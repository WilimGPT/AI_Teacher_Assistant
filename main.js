import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import PromptCreator from "./PromptCreator.vue";

const app = createApp({
  components: {
    PromptCreator,
  },
});

app.mount("#app");
