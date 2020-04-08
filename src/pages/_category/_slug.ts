import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";
import CardProfile from "~/components/CardProfile.vue";
import NavBreadcrumb from "~/components/NavBreadcrumb.vue";
import TagPostCategory from "~/components/TagPostCategory.vue";
import SectionPostArticle from "~/components/SectionPostArticle.vue";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "",
  components: {
    CardProfile,
    NavBreadcrumb,
    TagPostCategory,
    SectionPostArticle
  },
  asyncData(ctx: Context) {
    return {
      post: ctx.params.data,
      test: ctx.payload
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
        }
      ];
    }
  },
  mounted(): void {
    Prism.highlightAll();
  }
});
