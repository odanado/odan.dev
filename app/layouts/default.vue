<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'

export default Vue.extend({
  components: {
    AppHeader
  }
})
</script>

<style lang="scss">
@import "~/assets/global.scss";

html {
  font-size: 62.5%;
  background-color: $light-bg-color;
  color: $text-color;
}

body {
  margin: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
