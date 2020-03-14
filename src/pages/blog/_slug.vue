<template>
  <main>
    <article>
      <h1 class="heading">{{ post.title }}</h1>
      <div class="info">
        <time class="time">{{ post.createdAt }}</time>
        <span class="category">{{ post.category.fields.name }}</span>
      </div>
      <!-- eslint-disable -->
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
  },
  head() {
    return {
      title: (this as any).post.title
    };
  }
});
</script>

<style scoped lang="scss">
.heading {
  font-weight: bold;

  @include MQ("pc") {
    font-size: 36px;
    line-height: 48px;
  }

  @include MQ("sp") {
    font-size: 26px;
    line-height: 38px;
  }
}

.info {
  display: flex;
  margin-top: 20px;

  .time,
  .category {
    font-size: 16px;
    line-height: 100%;

    @include MQ("sp") {
      font-size: 14px;
    }
  }

  .category {
    margin-left: 15px;

    @include MQ("sp") {
      margin-left: 10px;
    }
  }
}

.contents {
  @include MQ("pc") {
    margin-top: 100px;
  }

  @include MQ("sp") {
    margin-top: 75px;
  }

  @for $i from 0 through 5 {
    /deep/ h#{$i + 1} {
      @include ContentHeading(#{$i});
    }
  }

  /deep/ p {
    @include MQ("pc") {
      font-size: 16px;
      line-height: 26px;
    }

    @include MQ("sp") {
      font-size: 14px;
      line-height: 24px;
    }

    & + p {
      @include MQ("pc") {
        margin-top: 26px;
      }

      @include MQ("sp") {
        margin-top: 24px;
      }
    }
  }

  /deep/ pre {
    @include MQ("pc") {
      margin-bottom: 26px;
      margin-top: 26px;
    }

    @include MQ("sp") {
      font-size: 12px;
      margin-bottom: 24px;
      margin-top: 24px;
    }
  }

  /deep/ ul {
    list-style: disc inside;

    @include MQ("pc") {
      margin-bottom: 26px;
      margin-top: 26px;
    }

    @include MQ("sp") {
      margin-bottom: 24px;
      margin-top: 24px;
    }

    li {
      @include MQ("pc") {
        font-size: 16px;
        line-height: 26px;
      }

      @include MQ("sp") {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  /deep/ ol {
    list-style: decimal inside;

    @include MQ("pc") {
      margin-bottom: 26px;
      margin-top: 26px;
    }

    @include MQ("sp") {
      margin-bottom: 24px;
      margin-top: 24px;
    }

    li {
      @include MQ("pc") {
        font-size: 16px;
        line-height: 26px;
      }

      @include MQ("sp") {
        font-size: 14px;
        line-height: 24px;
      }
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
