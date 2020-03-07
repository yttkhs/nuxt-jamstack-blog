const contentful = require("contentful");
const config = require("./.contentful.json");
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

export default {
  srcDir: "src/",
  mode: "universal",
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  css: ["~/assets/scss/_common.scss"],
  plugins: ["~/plugins/contentful"],
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxt/typescript-build"
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    "nuxt-webfontloader"
  ],
  styleResources: {
    scss: ["~/assets/scss/_variable.scss", "~/assets/scss/_mixin.scss"]
  },
  webfontloader: {
    google: {
      families: ["M PLUS 1p:Regular,Medium,Bold,Extra-Bold"]
    }
  },
  axios: {},
  typescript: {
    typeCheck: {
      eslint: true
    },
    ignoreNotFoundWarnings: true
  },
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {}
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: process.env.CTF_BLOG_POST_TYPE_ID
        })
        .then((posts) => {
          return posts.items.map((post) => `/posts/${post.fields.slug}`);
        });
    }
  },
  env: {
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  }
};
