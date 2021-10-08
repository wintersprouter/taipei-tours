<template>
  <div class="card">
    <div class="card-cover">
      <img
        :src="attraction.images[0].src"
        :alt="attraction.name"
        class="card-cover-img"
      />
    </div>
    <div class="card-content">
      <div class="card-content-title">{{ attraction.name }}</div>
      <div class="card-content-text">{{ attraction.address }}</div>
    </div>
    <div class="card-footer">
      <button class="card-content-button">More</button>
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
