<template>
  <main>
    <article>
      <h1 class="heading">{{ post.title }}</h1>
      <div class="info">
        <time class="time">{{ post.createdAt }}</time>
        <span class="category">{{ post.category.fields.name }}</span>
      </div>
      <div class="contents" v-html="$md.render(post.content)"></div>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Context } from "@nuxt/types";
import Prism from "~/plugins/prism";

export default Vue.extend({
  name: "",
  async asyncData(ctx: Context) {
    try {
      const data = await ctx.params.post;
      return {
        post: data
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  mounted(): void {
    Prism.highlightAll();
  }
});
</script>

<style scoped lang="scss">
.heading {
  font-size: 36px;
  line-height: 48px;
}

.info {
  display: flex;
  margin-top: 20px;

  .time,
  .category {
    font-size: 16px;
    line-height: 100%;
  }

  .category {
    margin-left: 15px;
  }
}

.contents {
  margin-top: 100px;

  @for $i from 0 through 5 {
    /deep/ h#{$i + 1} {
      @include ContentHeading(#{$i});
    }
  }

  /deep/ p {
    font-size: 16px;
    line-height: 26px;

    & + p {
      margin-top: 26px;
    }
  }

  /deep/ pre {
    margin-bottom: 26px;
    margin-top: 26px;
  }

  /deep/ ul {
    list-style: disc inside;
    margin-bottom: 26px;
    margin-top: 26px;

    li {
      font-size: 16px;
      line-height: 26px;
    }
  }

  /deep/ ol {
    list-style: decimal inside;
    margin-bottom: 26px;
    margin-top: 26px;

    li {
      font-size: 16px;
      line-height: 26px;
    }
  }

  /deep/ * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
