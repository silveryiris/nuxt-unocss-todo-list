<template>
  <h2
    :id="id"
    prose
    prose-blue
    dark:prose-invert
    flex
    items-center
    @mouseover="showLinkIcon = true"
    @mouseleave="showLinkIcon = false"
  >
    <NuxtLink :href="`#${id}`" no-underline>
      <slot />
    </NuxtLink>

    <span v-show="showLinkIcon" i-heroicons-link-solid inline-block ml-4 w-4 h-4></span>
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()

const showLinkIcon = ref(false)
</script>
