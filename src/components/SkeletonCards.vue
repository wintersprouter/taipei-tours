<template>
  <div>
    <div class="card">
      <div class="card-cover">
        <div class="card-cover-title"></div>
        <div class="card-cover-img" />
      </div>
      <div class="card-content">
        <div class="card-content-text">
          <div class="card-content-text-fill"></div>
          <div class="card-content-text-fill"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  height: 450px;
  &-cover-img {
    background: rgba($color-gray, 0.5);
  }
  &-content-text-fill {
    background: rgba($color-gray, 0.3);
    border-radius: 15px;
    height: 2rem;
    margin-bottom: 1rem;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}
</style>
