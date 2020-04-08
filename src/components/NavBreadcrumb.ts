import Vue from "vue";

export interface BreadcrumbData {
  name: string;
  url: string;
}

export default Vue.extend({
  name: "NavBreadcrumb",
  props: {
    data: {
      type: Array,
      required: false,
      default(): BreadcrumbData[] {
        return [
          {
            name: "HOME",
            url: "/"
          }
        ];
      }
    }
  },
  computed: {
    isHome(): (url: string) => boolean {
      return (url: string) => url === "/";
    }
  }
});
