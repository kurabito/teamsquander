<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
</script>

<template>
  <div>
    <Vue3Marquee class="half">
      Way down in the hole &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Get on up! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Happy with par &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Vue3Marquee>
    <picture>
      <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" media="(prefers-color-scheme: light)">
      <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTPInverse.jpg" media="(prefers-color-scheme: dark)">
      <img src="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" alt="Logo" />
    </picture>
  </div>
</template>

<style scoped>
.half {
  max-width: 50%; /* Or a specific pixel value, e.g., 500px */
  margin-left: auto;
  margin-right: auto;
}
img {
  max-width: 100%; /* Image will not exceed its container's width */
  height: auto; /* Height adjusts proportionally to maintain aspect ratio */
}
</style>