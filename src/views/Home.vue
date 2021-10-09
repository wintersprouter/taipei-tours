<template>
  <div class="container">
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
    <footer><Pagination /></footer>
  </div>
</template>
<script>
import Attraction from "../components/Attraction.vue";
import attractionsAPI from "./../apis/attractions";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Home",
  components: { Attraction, Pagination },
  data() {
    return {
      attractions: [],
      totalPage: -1,
    };
  },
  created() {
    const { page = "", categoryIds = "" } = this.$route.query;
    this.fetchAttractions({ queryPage: page, queryCategoryId: categoryIds });
  },

  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryIds = "" } = to.query;
    this.fetchAttractions({ queryPage: page, queryCategoryIds: categoryIds });
    next();
    this.fetchAttractions({
      page: 1,
      categoryIds: "",
    });
  },
  methods: {
    async fetchAttractions({ queryPage, queryCategoryIds }) {
      try {
        const response = await attractionsAPI.getAttractions({
          page: queryPage,
          categoryIds: queryCategoryIds,
        });
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