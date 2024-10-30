<template>
  <div id="app">
    <h1>AI Teacher Assistant</h1>
    <PromptCreator />
  </div>
</template>

<script>
import PromptCreator from './components/PromptCreator.vue';

export default {
  components: {
    PromptCreator,
  },
};
</script>

<style>
/* Add any global styles here */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}
</style>
