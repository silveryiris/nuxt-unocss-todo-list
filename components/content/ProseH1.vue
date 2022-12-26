<template>
  <h1
    :id="id"
    prose
    prose-blue
    font-extrabold
    dark:prose-invert
    flex
    items-center
    @mouseover="showLinkIcon = true"
    @mouseleave="showLinkIcon = false"
  >
    <NuxtLink :href="`#${id}`" no-underline>
      <slot />
    </NuxtLink>

    <span v-show="showLinkIcon" i-heroicons-star inline-block ml-4 w-6 h-6></span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()

const showLinkIcon = ref(false)
</script>
