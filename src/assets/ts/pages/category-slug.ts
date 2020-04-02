import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";
import CardProfile from "~/components/CardProfile.vue";
import NavBreadcrumb from "~/components/NavBreadcrumb.vue";
import TagPostCategory from "~/components/TagPostCategory.vue";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "",
  components: { CardProfile, NavBreadcrumb, TagPostCategory },
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
