<template>
  <nav class="NavCategory">
    <ul>
      <li><nuxt-link to="/">NEW</nuxt-link></li>
      <li v-for="(category, index) in data" :key="index">
        <nuxt-link
          :to="{
            name: 'category',
            params: { category: category.slug }
          }"
        >
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
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
</script>

<style scoped lang="scss">
.NavCategory {
  margin-bottom: 30px;
  width: 100%;

  ul {
    align-items: center;
    display: flex;

    li {
      &:not(:first-of-type) {
        margin-left: 15px;
      }

      a {
        background-color: $COLOR_BASE;
        border: 1px solid $COLOR_WHITE;
        border-radius: 20px;
        color: $COLOR_WHITE;
        display: block;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.1em;
        line-height: 14px;
        padding: 12px 20px;

        &.nuxt-link-exact-active {
          background-color: $COLOR_WHITE;
          color: $COLOR_BASE;
        }
      }
    }
  }
}
</style>
