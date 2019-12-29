<template>
  <header class="header">
    <ul class="items">
      <li
        v-for="(item, i) in items"
        :key="`item_${i}`"
        class="item"
      >
        <nuxt-link :to="item.route" class="link">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        {
          text: 'About me',
          route: '/'
        }
        /*
        {
          text: 'Accounts',
          route: '/accounts'
        },
        {
          text: 'Talks',
          route: '/talks'
        },
        {
          text: 'OSS',
          route: '/oss'
        }
        */
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~/assets/global.scss";

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background-color: $primary-color;

  .items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0;
    padding: 0;

    .item {
      margin: 0 2rem;
      list-style: none;

      .link {
        font-size: $font-size-medium;
        text-decoration: none;
        color: $text-color;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
