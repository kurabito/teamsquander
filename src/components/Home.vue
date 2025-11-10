<script setup>
// export default { 
//     name: 'Home'
//  }
</script>

<template>
  <div>
    <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" media="(prefers-color-scheme: light)">
    <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTPInverse.jpg" media="(prefers-color-scheme: dark)">
    <img class="full-width" src="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" alt="Logo" />
  </div>
</template>

<style>
.full-width {
  max-width: 100%; /* Image will not exceed its container's width */
  height: auto; /* Height adjusts proportionally to maintain aspect ratio */
}
</style>