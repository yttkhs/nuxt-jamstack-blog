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
  height: $HEADER_HEADER;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: $CONTENTS_WIDTH;
  padding-left: 30px;
  padding-right: 30px;

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
            height: 22px;
            width: 22px;
          }
        }

        &.twitter {
          img {
            height: 20px;
            width: 25px;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 12px;
    line-height: 100%;
  }
}
</style>
