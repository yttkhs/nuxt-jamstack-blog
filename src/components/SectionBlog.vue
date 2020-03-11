<template>
  <section class="SectionBlog">
    <h2 class="heading">BLOG</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post">
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
  .heading {
    font-weight: bold;
    line-height: 100%;

    @include MQ("pc") {
      font-size: 36px;
    }

    @include MQ("sp") {
      font-size: 26px;
    }
  }

  .post-list {
    @include MQ("pc") {
      margin-top: 40px;
    }

    @include MQ("sp") {
      margin-top: 30px;
    }
  }

  .post {
    &:not(:first-of-type) {
      @include MQ("pc") {
        margin-top: 30px;
      }

      @include MQ("sp") {
        margin-top: 20px;
      }
    }
  }

  .title {
    text-decoration: none;

    @include MQ("pc") {
      font-size: 16px;
      line-height: 26px;
    }

    @include MQ("sp") {
      font-size: 14px;
      line-height: 23px;
    }
  }

  .info {
    display: flex;

    @include MQ("pc") {
      margin-top: 10px;
    }

    @include MQ("sp") {
      margin-top: 7.5px;
    }

    .time,
    .category {
      color: $COLOR_GRAY;
      font-size: 14px;
      line-height: 100%;

      @include MQ("sp") {
        font-size: 12px;
      }
    }

    .category {
      margin-left: 10px;
    }
  }
}
</style>
