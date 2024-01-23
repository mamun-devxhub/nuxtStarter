// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "LMV",
      titleTemplate: "%s | LMV",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { property: "og:type", content: "website" },
        { hid: "og:image", property: "og:image", content: "" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "keywords", content: process.env.NUXT_PUBLIC_META_KEYWORDS },
        { name: "description", content: "LMV" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${process.env.NUXT_PUBLIC_CDN_URL}/images/fav-icon.ico`,
        },
        {
          key: "canonical",
          rel: "canonical",
          href: process.env.NUXT_PUBLIC_SITE_URL,
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL,
    authSecret: "secret",
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      cdnURL: process.env.NUXT_PUBLIC_CDN_URL,
      googleMapKey: process.env.NUXT_PUBLIC_GOOGLE_MAP_KEY,
      workflow: process.env.NUXT_PUBLIC_WORKFLOW,
      recaptchaKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
  },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  modules: ["@nuxtjs/tailwindcss"],

  nitro: {
    preset: process.env.NITRO_PRESET || "node-cluster",
    storage: {
      cache: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
      redis: {
        driver: "redis",
        url: process.env.NUXT_PUBLIC_REDIS_URL,
      },
    },
    devStorage: {
      cache: {
        driver: "fs",
        base: "./data/cache",
      },
      redis: {
        driver: "fs",
        base: "./data/db",
      },
    },
    routeRules: {
      "/server/**": {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/**`,
      },
    },
  },
});
