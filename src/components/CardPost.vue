<template>
  <li class="CardPost">
    <nuxt-link
      class="CardPost__wrapper"
      :to="{
        name: 'category-slug',
        params: {
          category: data.category.slug,
          slug: data.slug,
          data: data
        }
      }"
    >
      <div class="CardPost__details">
        <h2 class="CardPost__title">{{ data.title }}</h2>
        <time class="CardPost__time" :datetime="data.createdAt">
          {{ data.createdAt }}
        </time>
        <TagPostCategory class="CardPost__category">
          {{ data.category.name }}
        </TagPostCategory>
      </div>
      <figure class="CardPost__thumb">
        <img src="" alt="" />
      </figure>
    </nuxt-link>
  </li>
</template>

<script lang="ts" src="../assets/ts/components/CardPost.ts" />
<style scoped lang="scss" src="../assets/scss/components/CardPost.scss" />
