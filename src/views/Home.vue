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
        :total-page="totalPage"
        :category-ids="categoryIds"
        :previous-page="previousPage"
        :next-page="nextPage"
      />
    </footer>
  </div>
</template>
<script>
import Attraction from "../components/Attraction.vue";
import attractionsAPI from "./../apis/attractions";
import miscellaneousAPI from "./../apis/miscellaneous";
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
      categoryIds: "",
      categories: [],
    };
  },
  created() {
    const {
      page = 1,
      categoryIds = "",
      type = "Attractions",
    } = this.$route.query;
    this.fetchAttractions({ queryPage: page, queryCategoryIds: categoryIds });
    this.fetchAttractionCategories({ queryType: type });
  },

  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryIds = "" } = to.query;
    this.fetchAttractions({ queryPage: page, queryCategoryIds: categoryIds });
    next();
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
        const totalpages = [];
        const pages = Math.ceil(total / pageLimit);
        for (let i = 1; i <= pages; i++) {
          totalpages.push(i);
        }
        this.attractions = data;
        this.currentPage = Number(queryPage) || 1;
        this.pages = pages;
        this.totalPage = totalpages;
        this.previousPage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1;
        this.nextPage =
          this.currentPage + 1 > this.pages ? this.pages : this.currentPage + 1;
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchAttractionCategories({ queryType }) {
      try {
        const { data } = await miscellaneousAPI.getCategories({
          type: queryType,
        });
        const { Category } = data.data;
        this.categories = Category;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>