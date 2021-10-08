<template>
  <div class="card">
    <div class="card-cover">
      <div class="card-cover-title">{{ attraction.name }}</div>
      <button type="button" class="button-like">
        <svg
          class="button-like-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"
          />
        </svg>
      </button>
      <img
        :src="attraction.images[0].src"
        :alt="attraction.name"
        class="card-cover-img"
      />
    </div>
    <div class="card-content">
      <div class="card-content-text">
        <font-awesome-icon icon="gratipay"></font-awesome-icon>
        <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
        {{ attraction.address }}
      </div>
    </div>
    <div class="card-footer">
      <button class="button-more">More</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Attraction",
  props: {
    initialAttraction: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      attraction: this.initialAttraction,
    };
  },
};
</script>
