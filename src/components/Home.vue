<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';

</script>

<template>
  <div>
    <div class="half">
      <Vue3Marquee>
        <span>This is for Doug!</span>
        <span>Way down in the hole</span>
        <span>Get on up!</span>
      </Vue3Marquee>
    </div>
    <picture>
      <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" media="(prefers-color-scheme: light)">
      <source srcset="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTPInverse.jpg" media="(prefers-color-scheme: dark)">
      <img src="https://teamsquander.s3.us-west-2.amazonaws.com/SquanderFinal2024resizedTP.jpg" alt="Logo" />
    </picture>
  </div>
</template>

<style scoped>
span {
  padding-right: 150px;
}
img {
  max-width: 100%; /* Image will not exceed its container's width */
  height: auto; /* Height adjusts proportionally to maintain aspect ratio */
}
.half {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>