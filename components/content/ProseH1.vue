<template>
  <h1
    :id="id"
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

    <span v-show="showLinkIcon" i-heroicons-star inline-block ml-4 w-7 h-7></span>
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()

const showLinkIcon = ref(false)
</script>
