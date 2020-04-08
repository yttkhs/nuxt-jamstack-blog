import Vue, { PropType } from "vue";
import { SortCategoriesData } from "~/plugins/sortCategoriesData";

export default Vue.extend({
  name: "NavCategory",
  props: {
    data: {
      type: Array as PropType<SortCategoriesData[]>,
      required: true
    }
  }
});
