import dayjs from "dayjs";
import { Plugin } from "@nuxt/types";
import { Entry } from "contentful/index";

declare module "@nuxt/types" {
  interface Context {
    $sortPostsData(data: Entry<any>[]): SortPostsData[];
  }
}

export interface SortPostsData {
  [key: string]: string | number | undefined;
}

const sortPostsData: Plugin = (context) => {
  context.$sortPostsData = (data: Entry<any>[]): SortPostsData[] => {
    return data.map(
      (item: Entry<any>, index: number): SortPostsData => ({
        id: index,
        postId: item.sys.id,
        category: item.fields.category,
        title: item.fields.title,
        content: item.fields.content,
        futured: item.fields.futured,
        slug: item.fields.slug,
        thumbnail: item.fields.thumbnail,
        createdAt: dayjs(item.sys.createdAt).format("YYYY.MM.DD"),
        updatedAt: dayjs(item.sys.updatedAt).format("YYYY.MM.DD")
      })
    );
  };
};

export default sortPostsData;
