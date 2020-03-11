<template>
  <header>
    <nuxt-link to="/" class="logo">YUTA TAKAHASHI</nuxt-link>
    <nav>
      <ul>
        <li><nuxt-link to="/blog">BLOG</nuxt-link></li>
        <li>WORKS</li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader"
});
</script>

<style scoped lang="scss">
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @include MQ("pc") {
    height: $HEADER_HEADER;
    max-width: $CONTENTS_WIDTH;
    padding-left: 30px;
    padding-right: 30px;
  }

  @include MQ("sp") {
    height: $HEADER_HEADER - 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.logo {
  font-weight: bold;
  line-height: 100%;
  text-decoration: none;

  @include MQ("pc") {
    font-size: 16px;
  }

  @include MQ("sp") {
    font-size: 14px;
  }
}

nav {
  ul {
    display: flex;

    li {
      line-height: 100%;

      @include MQ("pc") {
        font-size: 16px;
      }

      @include MQ("sp") {
        font-size: 14px;
      }

      &:not(:first-of-type) {
        @include MQ("pc") {
          margin-left: 30px;
        }

        @include MQ("sp") {
          margin-left: 15px;
        }
      }

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
