<template>
  <nav class="NavBreadcrumb">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        :class="{ home: isHome(item.url) }"
      >
        <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
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
</script>

<style scoped lang="scss">
.NavBreadcrumb {
  margin-bottom: 30px;

  ul {
    align-items: center;
    display: flex;

    li {
      &:not(:first-of-type) {
        margin-left: 10px;
      }

      a {
        background-color: $COLOR_PRIMARY;
        border: 1px solid $COLOR_SECONDARY;
        border-radius: 15px;
        color: $COLOR_WHITE;
        display: block;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.1em;
        line-height: 12px;
        max-width: 200px;
        overflow: hidden;
        padding: 9px 15px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.nuxt-link-exact-active {
          font-weight: 700;
        }
      }

      &.home {
        a {
          padding-left: 36px;
          position: relative;

          &::before {
            background-image: url("../assets/images/home.svg");
            background-repeat: no-repeat;
            background-size: cover;
            content: "";
            height: 13px;
            left: 11px;
            position: absolute;
            top: calc(50% - 1px);
            transform: translateY(-50%);
            width: 15px;
          }
        }
      }
    }
  }
}
</style>
