import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";
import CardProfile from "~/components/CardProfile.vue";
import contentful from "~/plugins/contentful";
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
  async asyncData(ctx: Context) {
    try {
      const post = await contentful.getEntries({
        content_type: ctx.env.CTF_POST_TYPE_ID,
        "fields.slug": ctx.params.post
      });

      return {
        post: ctx.$sortPostsData(post.items)[0]
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
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
