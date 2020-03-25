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
        <span class="CardPost__category">{{ data.category.name }}</span>
      </div>
      <figure class="CardPost__thumb">
        <img src="" alt="" />
      </figure>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { SortPostsData } from "~/plugins/sortPostsData";

export default Vue.extend({
  name: "CardPost",
  props: {
    data: {
      type: Object as PropType<SortPostsData>,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.CardPost {
  background-color: $COLOR_PRIMARY;
  border: 1px solid $COLOR_SECONDARY;
  border-radius: 10px;
  width: 100%;

  &__wrapper {
    align-items: flex-start;
    display: flex;
    padding: 30px;
  }

  &__details {
    flex: 1;
  }

  &__title,
  &__time,
  &__category {
    color: $COLOR_WHITE;
    letter-spacing: 0.1em;
  }

  &__title {
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
  }

  &__time {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    margin-top: 20px;
    padding-left: 25px;
    position: relative;

    &::before {
      background-image: url("../assets/images/time_wh.svg");
      content: "";
      height: 15px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
    }
  }

  &__category {
    background-color: $COLOR_SECONDARY;
    border-radius: 5px;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
    margin-top: 20px;
    padding: 9px 15px;
  }

  &__thumb {
    background-color: $COLOR_SECONDARY;
    border-radius: 5px;
    height: 120px;
    margin-left: 30px;
    overflow: hidden;
    width: 120px;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
