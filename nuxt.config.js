require("dotenv").config();
const path = require("path");
const contentful = require("contentful");
const config = require("./.contentful.json");
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});

const lang = "ja";
const siteName = "U's Dev Blog";
const siteDesc = "Yuta Takahashi Engineer Blog";
const siteKeywords = "Frontend,Engineer,U's Dev Blog,Yuta,Takahashi,blog,";
const baseHost = process.env.BASE_HOST || "http://localhost:3000";
const baseDir = process.env.BASE_DIR || "/";
const baseUrl = baseHost + baseDir;

export default {
  srcDir: "src/",
  mode: "universal",
  head: {
    titleTemplate: `%s | ${siteName}`,
    htmlAttrs: {
      lang
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "noindex" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no"
      },
      { hid: "description", name: "description", content: siteDesc },
      { hid: "keywords", name: "keywords", content: siteKeywords },
      { hid: "og:site_name", property: "og:site_name", content: siteName },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: baseUrl },
      { hid: "og:title", property: "og:title", content: siteName },
      { hid: "og:description", property: "og:description", content: siteDesc }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;500;700;800&display=swap"
      }
    ]
  },
  loading: { color: "#fff" },
  css: ["~/assets/scss/_common.scss"],
  plugins: [
    "~/plugins/contentful",
    "~/plugins/sortPostsData.ts",
    "~/plugins/sortCategoriesData.ts",
    "~/plugins/fetchContentfulData.ts",
    "~/plugins/prism.ts"
  ],
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxt/typescript-build"
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    "@nuxtjs/markdownit",
    "nuxt-webfontloader"
  ],
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
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
    extend(config, ctx) {
      config.devtool = ctx.isClient ? "eval-source-map" : "inline-source-map";
    }
  },
  router: {
    base: baseDir
  },
  generate: {
    fallback: true,
    subFolders: false,
    routes() {
      const posts = client
        .getEntries({
          content_type: process.env.CTF_POST_TYPE_ID,
          order: "-sys.createdAt"
        })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: `/${entry.fields.category.fields.slug}/${entry.fields.slug}`,
              payload: entry
            };
          });
        });

      const categories = client
        .getEntries({
          content_type: process.env.CTF_CATEGORY_TYPE_ID,
          order: "-sys.createdAt"
        })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: `/${entry.fields.slug}`,
              payload: entry
            };
          });
        });

      return Promise.all([categories, posts]).then((values) => {
        return [...values[0], ...values[1]];
      });
    }
  },
  dotenv: {
    path: process.cwd()
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".ts"],
    root: path.resolve(__dirname),
    alias: {
      "@": path.resolve(__dirname),
      "~": path.resolve(__dirname)
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_POST_TYPE_ID: process.env.CTF_POST_TYPE_ID,
    CTF_CATEGORY_TYPE_ID: process.env.CTF_CATEGORY_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  }
};
