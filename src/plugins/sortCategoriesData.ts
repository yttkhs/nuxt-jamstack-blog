import { Plugin } from "@nuxt/types";
import { Entry } from "contentful/index";

declare module "@nuxt/types" {
  interface Context {
    $sortCategoriesData(data: Entry<any>[]): SortCategoriesData[];
  }
}

export interface SortCategoriesData {
  slug: string;
  name: string;
}

const sortCategoriesData: Plugin = (context) => {
  context.$sortCategoriesData = (data: Entry<any>[]): SortCategoriesData[] => {
    return data.map(
      (item: Entry<any>): SortCategoriesData => {
        return {
          slug: item.fields.slug,
          name: item.fields.name
        };
      }
    );
  };
};

export default sortCategoriesData;
