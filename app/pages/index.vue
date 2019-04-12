<template>
  <main class="main">
    <v-icon class="icon rotate" />
    <v-about-me />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import VIcon from '~/components/VIcon.vue'
import VAboutMe from '~/components/VAboutMe.vue'

export default Vue.extend({
  components: {
    VIcon,
    VAboutMe
  }
})
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.icon {
  width: 12.8rem;
  height: 12.8rem;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate {
  animation-name: rotate;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
