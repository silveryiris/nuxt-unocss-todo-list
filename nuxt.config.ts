// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content", "@nuxtjs/color-mode"],
  // extends: "@nuxt-themes/typography",
  colorMode: {
    classSuffix: "",
  },
  content: {
    documentDriven: true,
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [
      { "document-driven-page": "w-full" },
      {
        "color-base": "text-gray-900 dark:text-gray-50 visited:text-gray-900",
        "bg-base": "bg-gray-100 dark:bg-gray-900",
        "ring-base": "ring-gray-200 dark:ring-gray-700",
        "bg-content": "bg-white dark:bg-gray-800",
      },
    ],
    rules: [],
    extraContent: { filesystem: ["./content/**/*.md"] },
  },
})
