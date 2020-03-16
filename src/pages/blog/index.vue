<template>
  <main>
    <div>{{ allPosts }}</div>
    <SectionBlog :posts="posts" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Context } from "@nuxt/types";
import SectionBlog from "~/components/SectionBlog.vue";
import client from "~/plugins/contentful";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "Blog",
  components: { SectionBlog },
  async asyncData(ctx: Context) {
    try {
      const { items } = await client.getEntries({
        content_type: ctx.env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      });

      return {
        posts: ctx.$sortPostsData(items)
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  computed: {
    allPosts(): SortPostsData {
      return (this as any).posts;
    }
  },
  head() {
    return {
      title: "BLOG"
    };
  }
});
</script>
