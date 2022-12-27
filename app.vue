<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
import "@unocss/reset/normalize.css"

useHead({ link: [{ rel: "icon", type: "image/svg+xml", href: "favicon.svg" }] })
</script>

<style>
/* reset */
body {
  margin: 0;
}
</style>
