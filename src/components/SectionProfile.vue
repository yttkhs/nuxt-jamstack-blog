<template>
  <section class="SectionProfile">
    <div>
      <h1 class="name">Yuta Takahashi</h1>
      <p class="position">Frontend Engineer</p>
      <p class="introduction">
        福岡県でフロントエンドエンジニア（2018〜）をしています。<br />転職活動中です。
      </p>
      <nav class="sns">
        <ul>
          <li class="github">
            <a
              href="https://github.com/imatchapro"
              target="_blank"
              rel="noopener"
              >@imatchapro</a
            >
          </li>
          <li class="twitter">
            <a
              href="https://twitter.com/imatchapro"
              target="_blank"
              rel="noopener"
              >@imatchapro</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <figure class="thumbnail">
      <img src="" alt="" />
    </figure>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SectionProfile"
});
</script>

<style scoped lang="scss">
.SectionProfile {
  align-items: flex-start;
  display: flex;

  .name {
    font-size: 48px;
    font-weight: bold;
    line-height: 100%;
  }

  .position {
    font-size: 18px;
    line-height: 100%;
    margin-top: 20px;
  }

  .introduction {
    font-size: 14px;
    line-height: 23px;
    margin-top: 40px;
  }

  .sns {
    margin-top: 40px;

    ul {
      display: flex;

      li {
        &:not(:first-of-type) {
          margin-left: 20px;
        }

        a {
          color: $COLOR_WHITE;
          position: relative;

          &::before {
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            left: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        &.github {
          a {
            padding-left: 32px;

            &::before {
              background-image: url("~assets/images/github.svg");
              height: 22px;
              width: 22px;
            }
          }
        }

        &.twitter {
          a {
            padding-left: 35px;

            &::before {
              background-image: url("~assets/images/twitter.svg");
              height: 20px;
              width: 25px;
            }
          }
        }
      }
    }
  }

  .thumbnail {
    background-color: #aaaaaa;
    border-radius: 50%;
    height: 200px;
    margin-left: 60px;
    width: 200px;
  }
}
</style>
