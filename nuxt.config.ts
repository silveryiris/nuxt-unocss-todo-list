// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content", "@nuxtjs/color-mode"],
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
    attributify: true, // enabled `@unocss/preset-attributify`
    typography: {
      // cssExtend: {
      //   "a:visited": {
      //     "border-bottom": "1px dashed",
      //     "text-decoration": "none",
      //   },
      //   "a:link": {
      //     "border-bottom": "1px dashed",
      //     "text-decoration": "none",
      //   },
      //   "a:hover": {
      //     "border-bottom": "1px solid",
      //     "text-decoration": "none",
      //   },
      // },
    }, // enabled `@unocss/preset-typography`

    // core options
    shortcuts: [
      { "document-driven-page": "w-full" },
      {
        "color-base": "text-gray-900 dark:text-gray-50 visited:text-gray-900",
        "bg-base": "bg-gray-100 dark:bg-gray-900",
        "ring-base": "ring-gray-200 dark:ring-gray-700",
        "bg-content": "bg-white dark:bg-gray-800",
        "linked-border": "no-underline border-0 border-b-2 border-dashed hover:border-solid",
        "linked-color": "border-slate-100 text-slate-100 hover:border-red-300 hover:text-red-300",
      },
    ],
    rules: [],
    extraContent: { filesystem: ["./content/**/*.md"] },
  },
})
