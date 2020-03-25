<template>
  <header class="TheHeader">
    <nuxt-link to="/" class="logo">
      <img src="../assets/images/logo.svg" alt="U's Dev Blog" />
    </nuxt-link>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader"
});
</script>

<style scoped lang="scss">
.TheHeader {
  align-items: center;
  background-color: $COLOR_PRIMARY;
  border-bottom: 1px solid $COLOR_SECONDARY;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;

  .logo {
    height: 30px;
    margin-top: 4px;
  }
}
</style>
