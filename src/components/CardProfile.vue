<template>
  <div class="CardProfile">
    <div class="CardProfile__details">
      <figure class="CardProfile__thumb">
        <img src="" alt="Yuta Takahashi" />
      </figure>
      <p class="CardProfile__name">Yuta<br />Takahashi</p>
    </div>
    <p class="CardProfile__desc">
      フロントエンドエンジニア。プログラミングやUIデザインのTIPSや考察など。
    </p>
    <nav class="CardProfile__sns">
      <ul>
        <li>
          <a
            href="https://twitter.com/imatchapro"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/imatchapro"
            target="_blank"
            rel="noopener"
          >
            <img src="../assets/images/github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a href="mailto:penityai@gmail.com">
            <img src="../assets/images/email.svg" alt="email" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" src="./CardProfile.ts" />
<style scoped lang="scss" src="./CardProfile.scss" />
