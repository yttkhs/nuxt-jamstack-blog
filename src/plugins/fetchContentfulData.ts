import { Context } from "@nuxt/types";
import contentful from "~/plugins/contentful";
import { SortPostsData } from "~/plugins/sortPostsData";

export const FetchContentfulData = {
  async asyncData(ctx: Context) {
    try {
      const [posts, categories] = await Promise.all([
        contentful.getEntries({
          content_type: ctx.env.CTF_POST_TYPE_ID,
          order: "-sys.createdAt"
        }),
        contentful.getEntries({
          content_type: ctx.env.CTF_CATEGORY_TYPE_ID,
          order: "-sys.createdAt"
        })
      ]);

      const postsData = () => {
        const rawData = ctx.$sortPostsData(posts.items);

        if (ctx.route.name === "index") return rawData;

        return rawData.filter(
          (item: SortPostsData) =>
            ctx.route.params.category === item.category.slug
        );
      };

      return {
        posts: postsData(),
        categories: ctx.$sortCategoriesData(categories.items)
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
};
