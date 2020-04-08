import Vue, { PropType } from "vue";
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
  props: {
    data: {
      type: Object as PropType<SortPostsData>,
      required: true
    }
  },
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
