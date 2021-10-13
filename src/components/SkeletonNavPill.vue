<template>
  <div class="container">
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
    <div class="pill"></div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  margin: 5rem auto;
}
.pill {
  background: rgba($color-gray, 0.3);
  border-radius: 15px;
  height: 3.5rem;
  width: 10rem;
  margin-bottom: 1rem;
  margin-right: 1.5rem;
}
@include phone-width() {
  .pill {
    display: none;
  }
}
</style>    