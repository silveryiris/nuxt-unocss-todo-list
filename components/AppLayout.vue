<template>
  <div flex flex-col w-full min-h-screen color-base bg-base>
    <Html lang="zh-TW" />
    <!-- <AppLoadingBar /> -->
    <AppNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from "./AppNavbar.vue"
</script>
