import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Define a simple component
const HelloWorld = {
  template: `<div>Hello World!</div>`,
};

// Create the Vue app
const app = createApp({
  components: {
    HelloWorld,
  },
});

app.mount("#app");
