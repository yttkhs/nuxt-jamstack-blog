<template>
  <main class="container">
    <div class="contents">
      <NavBreadcrumb :data="breadcrumb" />
      <NavCategory :data="categories" />
      <ul>
        <CardPost
          v-for="post in posts"
          :key="post.id"
          :data="post"
          class="PostItem"
        />
      </ul>
    </div>
    <aside class="sidebar">
      <CardProfile />
    </aside>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import NavCategory from "~/components/NavCategory.vue";
import NavBreadcrumb from "~/components/NavBreadcrumb.vue";
import CardProfile from "~/components/CardProfile.vue";
import CardPost from "~/components/CardPost.vue";
import { FetchContentfulData } from "~/plugins/fetchContentfulData";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "",
  components: { NavCategory, NavBreadcrumb, CardProfile, CardPost },
  mixins: [FetchContentfulData],
  data: () => ({
    posts: [] as SortPostsData[],
    categories: [] as string[]
  }),
  computed: {
    breadcrumb() {
      return [
        {
          name: "HOME",
          url: "/"
        },
        {
          name: this.$route.params.category.toUpperCase(),
          url: this.$route.params
        }
      ];
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

<style scoped lang="scss">
.PostItem {
  &:not(:first-of-type) {
    margin-top: 10px;
  }
}
</style>
