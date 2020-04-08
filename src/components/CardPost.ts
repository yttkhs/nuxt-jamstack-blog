import Vue, { PropType } from "vue";
import { SortPostsData } from "~/plugins/sortPostsData";
import TagPostCategory from "~/components/TagPostCategory.vue";

export default Vue.extend({
  name: "CardPost",
  components: { TagPostCategory },
  props: {
    data: {
      type: Object as PropType<SortPostsData>,
      required: true
    }
  }
});
