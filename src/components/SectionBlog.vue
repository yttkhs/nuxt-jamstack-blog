<template>
  <section class="SectionBlog">
    <h2 class="heading">BLOG</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post">
        <nuxt-link
          :to="{ name: 'post-slug', params: { slug: post.slug, post: post } }"
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
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "SectionBlog",
  props: {
    posts: {
      type: Array as PropType<SortPostsData[]>,
      required: true,
      validator(value: SortPostsData[]): boolean {
        return value.length > 0;
      }
    }
  }
});
</script>

<style scoped lang="scss">
.SectionBlog {
  margin-top: 120px;

  .heading {
    font-size: 36px;
    font-weight: bold;
    line-height: 100%;
  }

  .post-list {
    margin-top: 40px;
  }

  .post {
    &:not(:first-of-type) {
      margin-top: 30px;
    }
  }

  .title {
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
  }

  .info {
    display: flex;
    margin-top: 5px;

    .time,
    .category {
      color: $COLOR_GRAY;
      font-size: 14px;
      line-height: 100%;
    }

    .category {
      margin-left: 10px;
    }
  }
}
</style>
