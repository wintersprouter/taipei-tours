<template>
  <div class="info-card">
    <div class="info-card-icon">
      <font-awesome-icon icon="bolt"></font-awesome-icon>
    </div>
    <h2 class="info-card-title">目前尚無最愛的景點</h2>
    <p class="info-card-apply">
      <router-link
        class="info-card-link"
        :to="{ name: 'Home', query: { categoryIds: '', page: '1' } }"
      >
        查看更多景點
        <font-awesome-icon icon="arrow-right"></font-awesome-icon
      ></router-link>
    </p>
  </div>
</template>