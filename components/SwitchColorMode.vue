<template>
  <button
    text="red-500"
    h-8
    w-8
    i-heroicons-sun
    dark="i-heroicons-moon text-yellow-400 h-8 w-8"
    cursor-pointer
    @click="switchColorMode"
  ></button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const switchColorMode = () => {
  const mode = colorMode.value === "dark" ? "light" : "dark"

  colorMode.preference = mode
}
</script>
