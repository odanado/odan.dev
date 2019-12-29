<template>
  <ul class="accounts">
    <li v-for="(account, i) in accounts" :key="`account_${i}`" class="account">
      <a :href="account.url" target="_blank" class="link">
        {{ account.service }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      accounts: [
        {
          service: 'GitHub',
          url: 'https://github.com/odanado'
        },
        {
          service: 'Twitter',
          url: 'https://twitter.com/odan3240'
        },
        {
          service: 'SpeakerDeck',
          url: 'https://speakerdeck.com/odanado'
        },
        {
          service: 'HatenaBlog',
          url: 'https://odan3240.hatenablog.com/'
        },
        {
          service: 'Qiita',
          url: 'https://qiita.com/odanado'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~/assets/global.scss";

.accounts {
  .account {
    text-decoration: none;
    padding: 4px 0;

    .link {
      color: $text-color;

      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
