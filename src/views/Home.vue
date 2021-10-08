<template>
  <section class="attractions"><Attraction /></section>
</template>
<script>
import Attraction from "../components/Attraction.vue";
import attractionsAPI from "./../apis/attractions";
export default {
  name: "Home",
  components: { Attraction },
  created() {
    this.fetchAttractions();
  },
  methods: {
    async fetchAttractions() {
      try {
        const response = await attractionsAPI.getAttractions();
        console.log(response.data);
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
      }
    },
  },
};
</script>