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

<script lang="ts" src="./index.ts" />
<style scoped lang="scss" src="./index.scss" />
