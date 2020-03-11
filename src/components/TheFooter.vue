<template>
  <footer>
    <nav class="nav">
      <ul>
        <li class="github">
          <a
            href="https://github.com/imatchapro"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/github.svg" alt="github" />
          </a>
        </li>
        <li class="twitter">
          <a
            href="https://twitter.com/imatchapro"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/twitter.svg" alt="twitter" />
          </a>
        </li>
      </ul>
    </nav>
    <small class="copyright">&copy; 2020 YUTA TAKAHASHI</small>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheFooter"
});
</script>

<style scoped lang="scss">
footer {
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

  nav {
    ul {
      align-items: center;
      display: flex;

      li {
        &:not(:first-of-type) {
          margin-left: 20px;
        }

        &.github {
          img {
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

        &.twitter {
          img {
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

  .copyright {
    font-size: 12px;
    line-height: 100%;

    @include MQ("sp") {
      font-size: 10px;
    }
  }
}
</style>
