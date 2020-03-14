<template>
  <main>
    <SectionProfile />
    <SectionBlog :posts="postsNewArrival" />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Context } from "@nuxt/types";
import client from "~/plugins/contentful";
import SectionProfile from "~/components/SectionProfile.vue";
import SectionBlog from "~/components/SectionBlog.vue";
import { SortPostsData } from "~/plugins/sortPostsData.ts";

export default Vue.extend({
  name: "",
  components: { SectionProfile, SectionBlog },
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
  data: () => ({
    limit: 5
  }),
  computed: {
    postsNewArrival(): SortPostsData {
      return (this as any).posts.slice(0, this.limit);
    }
  },
  head() {
    return {
      title: "Yuta Takahashi",
      titleTemplate: ""
    };
  }
});
</script>
