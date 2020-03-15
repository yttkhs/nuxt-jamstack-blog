<template>
  <main>
    <div>{{ allPosts }}</div>
    <section class="SectionBlog">
      <h2 class="heading">BLOG</h2>
      <ul class="post-list">
        <li v-for="post in allPosts" :key="post.id" class="post">
          <nuxt-link
            :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"
            class="title"
            >{{ post.title }}</nuxt-link
          >
          <div class="info">
            <time class="time">{{ post.createdAt }}</time>
            <span class="category">{{ post.category.fields.name }}</span>
          </div>
        </li>
      </ul>
    </section>
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
