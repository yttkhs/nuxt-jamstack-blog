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
    <!--
    <figure class="thumbnail">
      <img src="" alt="" />
    </figure>
    -->
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
    font-weight: bold;

    @include MQ("pc") {
      font-size: 48px;
      line-height: 100%;
    }

    @include MQ("sp") {
      font-size: 38px;
      line-height: 130%;
    }
  }

  .position {
    line-height: 100%;
    margin-top: 15px;

    @include MQ("pc") {
      font-size: 18px;
    }

    @include MQ("sp") {
      font-size: 16px;
    }
  }

  .introduction {
    @include MQ("pc") {
      font-size: 14px;
      line-height: 23px;
      margin-top: 40px;
    }

    @include MQ("sp") {
      font-size: 12px;
      line-height: 20px;
      margin-top: 30px;
    }
  }

  .sns {
    @include MQ("pc") {
      margin-top: 40px;
    }

    @include MQ("sp") {
      margin-top: 30px;
    }

    ul {
      @include MQ("pc") {
        display: flex;
      }

      li {
        &:not(:first-of-type) {
          @include MQ("pc") {
            margin-left: 20px;
          }

          @include MQ("sp") {
            margin-top: 15px;
          }
        }

        a {
          color: $COLOR_WHITE;
          position: relative;

          @include MQ("sp") {
            font-size: 14px;
          }

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
            @include MQ("pc") {
              padding-left: 32px;
            }

            @include MQ("sp") {
              padding-left: 30px;
            }

            &::before {
              background-image: url("~assets/images/github.svg");

              @include MQ("pc") {
                height: 22px;
                width: 22px;
              }

              @include MQ("sp") {
                height: 20px;
                width: 20px;
              }
            }
          }
        }

        &.twitter {
          a {
            @include MQ("pc") {
              padding-left: 35px;
            }

            @include MQ("sp") {
              padding-left: 30px;
            }

            &::before {
              background-image: url("~assets/images/twitter.svg");

              @include MQ("pc") {
                height: 20px;
                width: 25px;
              }

              @include MQ("sp") {
                height: 15px;
                width: 20px;
              }
            }
          }
        }
      }
    }
  }

  .thumbnail {
    background-color: #aaaaaa;
    border-radius: 50%;
    height: 150px;
    margin-left: 60px;
    width: 150px;
  }
}
</style>
