<template>
  <header>
    <span class="logo">YUTA TAKAHASHI</span>
    <nav>
      <ul>
        <li>ABOUT</li>
        <li>BLOG</li>
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
  height: $HEADER_HEADER;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: $CONTENTS_WIDTH;
  padding-left: 30px;
  padding-right: 30px;
}

.logo {
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
}

nav {
  ul {
    display: flex;

    li {
      font-size: 14px;
      line-height: 100%;

      &:not(:first-of-type) {
        margin-left: 30px;
      }
    }
  }
}
</style>
