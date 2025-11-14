<template>
  <div class="marquee">
    <div
      class="marquee__inner"
      :style="{ animationDuration: animationDuration + 's' }"
      ref="inner"
    >
      <!-- Copy 1 -->
      <slot></slot>
      <!-- Copy 2 -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";

const inner = ref<HTMLElement | null>(null);
const animationDuration = ref(20);
let resizeObserver: ResizeObserver | null = null;

async function calculateSpeed() {
  await nextTick();
  const el = inner.value;
  if (!el) return;

  const width = el.scrollWidth;

  // Speed based on width
  animationDuration.value = Math.max(10, width / 80);
}

onMounted(() => {
  calculateSpeed();

  resizeObserver = new ResizeObserver(() => calculateSpeed());
  resizeObserver.observe(document.body);
});

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

/* Absolutely position scrolling content so it CAN'T stretch container */
.marquee__inner {
  position: absolute;
  left: 0;
  top: 0;

  display: inline-flex;
  white-space: nowrap;

  animation-name: scroll;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.marquee__inner > * {
  display: inline-block;
  padding-right: 50px;
}

@keyframes scroll {
  from {
    transform: translateX(100%);    /* Start offscreen on the right */
  }
  to {
    transform: translateX(-50%);    /* Move left by exactly one copy */
  }
}
</style>
