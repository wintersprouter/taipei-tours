<template>
  <section class="attractions">
    <div class="container">
      <div class="attractions-wrapper">
        <Attraction
          v-for="attraction in attractions"
          :key="attraction.id"
          :initial-attraction="attraction"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Attraction from "../components/Attraction.vue";
import attractionsAPI from "./../apis/attractions";
export default {
  name: "Home",
  components: { Attraction },
  data() {
    return {
      attractions: [],
      totalPage: -1,
      isFavorite: false,
    };
  },
  created() {
    this.fetchAttractions();
  },
  methods: {
    async fetchAttractions() {
      try {
        const response = await attractionsAPI.getAttractions();
        const { total, data } = response.data;
        this.totalPage = total;
        this.attractions = data;
        console.log(data);
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
      }
    },
  },
};
</script>