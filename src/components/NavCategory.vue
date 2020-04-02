<template>
  <nav class="NavCategory">
    <ul>
      <li><nuxt-link to="/">NEW</nuxt-link></li>
      <li v-for="(category, index) in data" :key="index">
        <nuxt-link
          :to="{
            name: 'category',
            params: { category: category.slug }
          }"
        >
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="../assets/ts/components/NavCategory.ts" />
<style scoped lang="scss" src="../assets/scss/components/NavCategory.scss" />
