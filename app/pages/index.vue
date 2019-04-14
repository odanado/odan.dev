<template>
  <main class="main">
    <v-icon class="icon" />
    <v-aboutme class="aboutme" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import VIcon from '~/components/VIcon.vue'
import VAboutme from '~/components/VAboutme.vue'

export default Vue.extend({
  components: {
    VIcon,
    VAboutme
  }
})
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  width: 100vw;
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
}

.icon {
  width: 12.8rem;
  height: 12.8rem;
  margin: 0 0 1.6rem;
}

.aboutme {
  width: 100%;
  margin: 0.8rem 0;
  box-sizing: border-box;
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
