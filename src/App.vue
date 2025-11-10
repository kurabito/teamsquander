<template>
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
</style>
