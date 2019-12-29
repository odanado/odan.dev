<template>
  <section class="aboutme">
    <h2 class="title">
      About me
    </h2>
    <p>
      エンジニアです。<br>
      フロントエンドやAWSやブロックチェーンや機械学習に興味があります。
    </p>
    <section>
      <v-account-icon-list />
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import VAccountIconList from '~/components/VAccountIconList.vue'

export default Vue.extend({
  components: {
    VAccountIconList
  }
})
</script>

<style lang="scss" scoped>
@import "~/assets/global.scss";

.aboutme {
  padding: 1.2rem;
  font-size: $font-size-medium;
  border: solid 2px $light-primary-color;
  border-radius: 4px;

  .title {
    margin: 0;
  }
}
</style>
