<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
// import AutoMarquee from '../components/AutoMarquee.vue'
</script>

<template>
  <div>
    <!-- <div class="narrow"> -->
    <Vue3Marquee class="half">
      Way down in the hole &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Get on up! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Happy with par &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <!-- <span>Way down in the hole</span><span>Get on up!</span><span>Happy with par</span><span>Test </span><span>Test </span><span>Test </span><span>Test </span><span>Test </span><span>Test </span><span>Test </span> -->
    </Vue3Marquee>
<!-- </div> -->
  <!-- <AutoMarquee>
    <span>Way down in the hole</span>
    <span>Get on up!</span>
    <span>Happy with par</span>
  </AutoMarquee> -->


<!-- <div class="marquee-container">
    <div class="marquee-content">
        <span>Scrolling Text 01</span>
        <span>Scrolling Text 02</span>
        <span>Scrolling Text 03</span>
    </div>
</div> -->

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
/* span {
  padding-right: 50px;
} */

/* span {
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
} */
.narrow {
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
}

img {
  max-width: 100%; /* Image will not exceed its container's width */
  height: auto; /* Height adjusts proportionally to maintain aspect ratio */
}


/* The marquee bar itself — responsive, fixed height */
.marquee {
  width: 100%;
  height: 35px;                 /* controls the size, not the text width */
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;          /* center text vertically */
  box-sizing: border-box;
}

/* The scrolling content – absolutely positioned so it cannot stretch layout */
.marquee__track {
  white-space: nowrap;
  position: absolute;
  left: 100%;
  display: inline-block;
  animation: marquee-scroll 10s linear infinite;
}

.marquee__track span {
  margin-right: 50px;
}

/* @keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
} */


.marquee-container {
    width: 50%; /* Or a specific pixel value, e.g., 500px */
    margin-left: auto;
    margin-right: auto;
    overflow: hidden; /* Hides any content that goes outside this container */
    white-space: nowrap; /* Prevents the text from wrapping to a new line */
    box-sizing: border-box;
}

.marquee-content {
    display: inline-block;
    padding-left: 100%; /* Starts the content off-screen */
    animation: marqueeAnimation 15s linear infinite; /* Apply your animation */
}

@keyframes marqueeAnimation {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%); /* Moves content to the left by its full width */
    }
}

</style>



