<template>
  <main class="container">
    <div class="contents">
      <NavBreadcrumb :data="breadcrumb" />
      <article class="PostDetails">
        <figure class="PostDetails__thumb">
          <img v-if="post.thumbnail" :src="post.thumbnail" alt="" />
        </figure>
        <div class="PostDetails__contents">
          <div class="PostDetails__head">
            <time class="PostDetails__time" :datetime="post.createdAt">
              {{ post.createdAt }}
            </time>
            <h1 class="PostDetails__title">{{ post.title }}</h1>
            <span class="PostDetails__category">{{ post.category.name }}</span>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="PostDetails__article"
            v-html="$md.render(post.content)"
          ></div>
          <div class="ButtonTwitterFollow">
            <a href="">@imatchaproをフォロー</a>
          </div>
          <section class="SectionShareSns">
            <h4 class="SectionShareSns__title">SHARE</h4>
            <nav class="SectionShareSns__nav">
              <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </nav>
          </section>
        </div>
      </article>
    </div>
    <aside class="sidebar">
      <CardProfile />
    </aside>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";
import CardProfile from "~/components/CardProfile.vue";
import NavBreadcrumb from "~/components/NavBreadcrumb.vue";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "",
  components: { CardProfile, NavBreadcrumb },
  asyncData(ctx: Context) {
    return {
      post: ctx.params.data
    };
  },
  data: () => ({
    post: {} as SortPostsData
  }),
  computed: {
    breadcrumb() {
      return [
        {
          name: "HOME",
          url: "/"
        },
        {
          name: this.post.category.name,
          url: `/${this.post.category.slug}`
        },
        {
          name: this.post.title,
          url: `/${this.post.category.slug}/${this.post.slug}`
        }
      ];
    }
  },
  mounted(): void {
    Prism.highlightAll();
  }
});
</script>

<style scoped lang="scss">
p {
  width: 100%;
}
</style>
