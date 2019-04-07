<template>
  <main class="main">
      <span class="emoji rotate">🤗</span>
      <span class="domain">odan.dev</span>
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.emoji {
  width: 16rem;
  display: block;
  font-size: 16rem;
}
.domain {
    font-size: 2rem;
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
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
