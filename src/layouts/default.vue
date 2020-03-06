<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter
  }
});
</script>
