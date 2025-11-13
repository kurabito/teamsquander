<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/discs">Discs</router-link> |
      <a href="https://www.teepublic.com/t-shirt/65580537-team-squander?store_id=647266" target="_blank">Merch</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
</style>