<!-- src/components/PromptCreator.vue -->
<template>
  <div class="prompt-creator">
    <h2>AI Teacher Assistant</h2>
    
    <!-- Language Selection -->
    <div>
      <label for="language">Language:</label>
      <el-select v-model="formData.language" placeholder="Select language">
        <el-option label="English" value="English"></el-option>
        <el-option label="Spanish" value="Spanish"></el-option>
        <!-- Add more language options as needed -->
      </el-select>
    </div>

    <!-- Level Selection -->
    <div>
      <label>Level:</label>
      <el-button-group>
        <el-button v-for="level in levels" :key="level" :type="formData.level === level ? 'primary' : ''" @click="setLevel(level)">
          {{ level }}
        </el-button>
      </el-button-group>
    </div>

    <!-- Exercise Type Selection -->
    <div>
      <label>Exercise Type:</label>
      <el-button-group>
        <el-button v-for="(type, index) in exerciseTypes" :key="index" @click="setExerciseType(type)">
          <i :class="type.icon"></i>
          {{ type.label }}
        </el-button>
      </el-button-group>
    </div>

    <!-- Options Section (if applicable) -->
    <!-- Topic and Notes Input -->
    <el-input v-model="formData.topic" placeholder="Add your topic or vocab" />
    <el-input type="textarea" v-model="formData.notes" placeholder="Give some context about your lesson or student" />

    <!-- Submit Button -->
    <el-button type="primary" @click="submitPrompt">Ask Assistant</el-button>
  </div>
</template>

<script>
export default {
  name: "PromptCreator",
  data() {
    return {
      formData: {
        language: "English",
        level: null,
        exerciseType: null,
        topic: "",
        notes: "",
      },
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      exerciseTypes: [
        { label: "Reading Text", icon: "fa fa-book" },
        { label: "Writing", icon: "fa fa-pencil" },
        // Add more types with appropriate icons
      ],
    };
  },
  methods: {
    setLevel(level) {
      this.formData.level = level;
    },
    setExerciseType(type) {
      this.formData.exerciseType = type.label;
    },
    submitPrompt() {
      console.log("Prompt data:", this.formData);
      // This is where you'll eventually make the API call
    },
  },
};
</script>

<style scoped>
/* Scoped styles for PromptCreator */
.prompt-creator {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
</style>
