<template>
  <main class="container">
    <div class="contents">
      <NavBreadcrumb :data="breadcrumb" />
      <article class="PostDetails">
        <figure class="PostDetails__thumb">
          <img v-if="post.thumbnail" :src="post.thumbnail" alt="" />
        </figure>
        <div class="PostDetails__contents">
          <div class="PostDetails__head">
            <time class="PostDetails__time" :datetime="post.createdAt">
              {{ post.createdAt }}
            </time>
            <h1 class="PostDetails__title">{{ post.title }}</h1>
            <TagPostCategory class="PostDetails__category">
              {{ post.category.name }}
            </TagPostCategory>
          </div>
          <!-- eslint-disable vue/no-v-html -->
          <SectionPostArticle
            class="PostDetails__article"
            v-html="$md.render(post.content)"
          ></SectionPostArticle>
          <div class="ButtonTwitterFollow">
            <a
              href="https://twitter.com/intent/follow?screen_name=imatchapro"
              target="_blank"
              rel="noopener"
              >@imatchaproをフォロー</a
            >
          </div>
        </div>
        <section class="SectionShareSns">
          <h4 class="SectionShareSns__title">SHARE</h4>
          <nav class="SectionShareSns__nav">
            <ul>
              <li>
                <a href="">
                  <img src="../../assets/images/twitter.svg" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../../assets/images/facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="../../assets/images/copy.svg" alt="copy" />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </article>
    </div>
    <aside class="sidebar">
      <CardProfile />
    </aside>
  </main>
</template>

<script lang="ts" src="./_slug.ts"></script>
<style scoped lang="scss" src="./_slug.scss" />
