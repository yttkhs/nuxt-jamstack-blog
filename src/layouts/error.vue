<template>
  <main>
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",
  props: {
    error: {
      type: Object,
      default: null
    }
  }
});
</script>
