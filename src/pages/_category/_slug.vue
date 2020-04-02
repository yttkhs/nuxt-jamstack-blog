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
          <div
            class="PostDetails__article"
            v-html="$md.render(post.content)"
          ></div>
          <div class="ButtonTwitterFollow">
            <a href="">@imatchaproをフォロー</a>
          </div>
          <section class="SectionShareSns">
            <h4 class="SectionShareSns__title">SHARE</h4>
            <nav class="SectionShareSns__nav">
              <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </nav>
          </section>
        </div>
      </article>
    </div>
    <aside class="sidebar">
      <CardProfile />
    </aside>
  </main>
</template>

<script lang="ts" src="../../assets/ts/pages/category-slug.ts"></script>
<style scoped lang="scss" src="../../assets/scss/pages/category-slug.scss" />
