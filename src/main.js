import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

console.log("Initializing Vue app...");

createApp(App)
  .use(ElementPlus)
  .mount('#app');

console.log("Vue app initialized.");
