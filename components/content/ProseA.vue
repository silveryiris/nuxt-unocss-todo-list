<template>
  <NuxtLink :to="href" :blank="blank" :static="static" color-base linked-border linked-color>
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  blank: {
    type: Boolean,
    default: false,
  },
  /**
   * `true` if `href` points to a static file
   */
  static: {
    type: Boolean,
    default: false,
  },
})
</script>
