import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    './assets/css/main.css',
    './assets/css/button.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
//**===== Meta Tag ========================
  app: {
    head: {
      title: 'Nuxt App',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3 App' },
      ],

      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
})
