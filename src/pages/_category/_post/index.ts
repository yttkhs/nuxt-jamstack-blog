import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";
import CardProfile from "~/components/CardProfile.vue";
import contentful from "~/plugins/contentful";
import NavBreadcrumb from "~/components/NavBreadcrumb.vue";
import TagPostCategory from "~/components/TagPostCategory.vue";
import SectionPostArticle from "~/components/SectionPostArticle.vue";
import { SortPostsData } from "~/plugins/sortPostsData";
import CardPost from "~/components/CardPost";

export default Vue.extend({
  name: "",
  components: {
    CardPost,
    CardProfile,
    NavBreadcrumb,
    TagPostCategory,
    SectionPostArticle
  },
  async asyncData(ctx: Context) {
    try {
      const [posts, post] = await Promise.all([
        contentful.getEntries({
          content_type: ctx.env.CTF_POST_TYPE_ID,
          order: "-sys.createdAt"
        }),
        contentful.getEntries({
          content_type: ctx.env.CTF_POST_TYPE_ID,
          "fields.slug": ctx.params.post
        })
      ]);

      const recommendedPosts = await ctx
        .$sortPostsData(posts.items)
        .filter((item: SortPostsData) => {
          return (
            ctx.route.params.category === item.category.slug &&
            ctx.params.post !== item.slug
          );
        });

      return {
        posts: recommendedPosts.slice(0, 2),
        post: ctx.$sortPostsData(post.items)[0]
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  data: () => ({
    posts: [] as SortPostsData[],
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
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: "og:title", property: "og:title", content: this.post.title },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:url",
          property: "og:url",
          content: `/${this.post.category.slug}/${this.post.slug}`
        },
        { hid: "og:image", property: "og:image", content: this.post.thumbnail }
      ]
    };
  }
});
