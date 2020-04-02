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
  head() {
    return {
      title: "Yuta Takahashi",
      titleTemplate: ""
    };
  }
});
