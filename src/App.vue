<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <h1>Welcome to the future online home of</h1>
    <h1>Team Squander!</h1>
    <img class="full-width" src="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.full-width {
  max-width: 100%; /* Image will not exceed its container's width */
  height: auto; /* Height adjusts proportionally to maintain aspect ratio */
}
</style>
