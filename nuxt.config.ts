// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "shadcn-nuxt",
    "@nuxt/image",
    [
      "nuxt-mail",
      {
        message: {
          to: "nguyennhathao01012003@gmail.com",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "nguyennhathao01012003@gmail.com",
            pass: "jvvs tjjh vgbb jekt",
          },
        },
      },
    ],
  ],
  app: {
    baseURL: "/portfolio",
    buildAssetsDir: "assets",
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      meta: [{ name: "description", content: "Nguyen Nhat Hao - Portfolio" }],
    },
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
