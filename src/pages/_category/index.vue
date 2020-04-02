<template>
  <main class="container">
    <div class="contents">
      <NavBreadcrumb :data="breadcrumb" />
      <NavCategory :data="categories" />
      <ul>
        <CardPost
          v-for="post in posts"
          :key="post.id"
          :data="post"
          class="PostItem"
        />
      </ul>
    </div>
    <aside class="sidebar">
      <CardProfile />
    </aside>
  </main>
</template>

<script lang="ts" src="../../assets/ts/pages/category.ts" />
<style scoped lang="scss" src="../../assets/scss/pages/category.scss" />
