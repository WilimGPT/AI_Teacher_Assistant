<template>
  <div class="prompt-creator">
    <label for="userInput">Enter your prompt:</label>
    <input type="text" id="userInput" v-model="promptText" placeholder="Type something..." />
    <button @click="askAssistant">Ask Assistant</button>
  </div>
</template>

<script>
export default {
  name: "PromptCreator",
  data() {
    return {
      promptText: "",
    };
  },
  methods: {
    askAssistant() {
      // Placeholder for future functionality
      console.log("Button clicked, but no action yet.");
    },
  },
};
</script>

<style scoped>
.prompt-creator {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
