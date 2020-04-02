<template>
  <nav class="NavBreadcrumb">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        :class="{ home: isHome(item.url) }"
      >
        <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="../assets/ts/components/NavBreadcrumb.ts" />
<style scoped lang="scss" src="../assets/scss/components/NavBreadcrumb.scss" />
