<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
</script>

<template>
  <!-- <div>
    <h1>Welcome to the future online home of</h1>
    <h1>Team Squander!</h1>
    <img class="full-width" src="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" />
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Home /> -->
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/discs">Discs</router-link>
    </nav>
    <router-view></router-view>
  </div>
  </template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  min-height: calc(var(--vh, 1vh) * 100); /* Use the calculated --vh */
  width: 100vw;
}
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
</style>
