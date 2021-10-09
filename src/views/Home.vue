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
    <footer>
      <Pagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :pages="pages"
        :previous-page="previousPage"
        :next-page="nextPage"
      />
    </footer>
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
      pages: 1,
      totalPage: [],
      currentPage: 1,
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    const { page = 1, categoryIds = "" } = this.$route.query;
    console.log(this.$route.query);
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
        const pageLimit = 30;
        this.attractions = data;

        this.currentPage = Number(queryPage) || 1;
        this.pages = Math.ceil(total / pageLimit);
        for (let i = 1; i < this.pages + 1; i++) {
          this.totalPage.push(i);
        }
        this.previousPage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1;
        this.nextPage =
          this.currentPage + 1 > this.pages ? this.pages : this.currentPage + 1;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
      }
    },
  },
};
</script>