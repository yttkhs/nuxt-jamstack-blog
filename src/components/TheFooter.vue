<template>
  <footer class="TheFooter">
    <small class="TheFooter__copyright">&copy; 2020 U’s Dev Blog</small>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheFooter"
});
</script>

<style scoped lang="scss">
.TheFooter {
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;

  &__copyright {
    font-size: 12px;
    letter-spacing: 0.1em;
    line-height: 12px;
  }
}
</style>
