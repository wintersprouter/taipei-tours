<template>
  <div class="container">
    <section class="tab"><NavTabs /></section>
    <section class="cover">
      <div class="cover-text">
        <h1 class="heading-primary">趣台北</h1>
      </div>
    </section>
    <section class="categories">
      <template v-if="isLoadingCategoryIds">
        <SkeletonNavPill />
      </template>
      <NavPills v-else :categories="categories" />
    </section>
    <section class="attractions">
      <div class="container">
        <div class="attractions-wrapper">
          <template v-if="isLoading">
            <SkeletonCards
              v-for="loadingCard in loadingCards"
              :key="loadingCard.id"
            />
          </template>

          <Attraction
            v-else
            v-for="attraction in attractions"
            :key="attraction.id"
            :initial-attraction="attraction"
            @after-add-favorite="afterAddFavorite"
            @after-remove-favorite="afterAddFavorite"
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
import NavPills from "../components/NavPills.vue";
import NavTabs from "../components/NavTabs.vue";
import SkeletonCards from "../components/SkeletonCards.vue";
import SkeletonNavPill from "../components/SkeletonNavPill.vue";
const STORAGE_KEY = "favorite-list";
export default {
  name: "Home",
  components: {
    NavTabs,
    NavPills,
    Attraction,
    Pagination,
    SkeletonCards,
    SkeletonNavPill,
  },
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
      favorAttractions: [],
      isLoading: false,
      isLoadingCategoryIds: false,
      loadingCards: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
      ],
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
    const { page = "", categoryIds = "", type = "Attractions" } = to.query;
    this.fetchAttractions({ queryPage: page, queryCategoryIds: categoryIds });
    this.fetchAttractionCategories({ queryType: type });
    next();
  },
  methods: {
    async fetchAttractions({ queryPage, queryCategoryIds }) {
      try {
        this.isLoading = true;
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
        this.favorAttractions =
          JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        const attractions = data.map((item) => ({
          ...item,
          isFavorited: this.favorAttractions.some(
            (data) => data.id === item.id
          ),
        }));
        this.categoryIds = queryCategoryIds;
        this.attractions = attractions;
        this.currentPage = Number(queryPage) || 1;
        this.pages = pages;
        this.totalPage = totalpages;
        this.previousPage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1;
        this.nextPage =
          this.currentPage + 1 > this.pages ? this.pages : this.currentPage + 1;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
      }
    },
    async fetchAttractionCategories({ queryType }) {
      try {
        this.isLoadingCategoryIds = true;
        const { data } = await miscellaneousAPI.getCategories({
          type: queryType,
        });
        const { Category } = data.data;
        this.categories = Category;
        this.isLoadingCategoryIds = false;
      } catch (error) {
        this.isLoadingCategoryIds = false;
        console.log("error", error);
      }
    },
    afterAddFavorite(favoritedAttraction) {
      const { id } = favoritedAttraction;
      const isFavorited = this.favorAttractions.some((data) => data.id === id);
      if (isFavorited) {
        this.favorAttractions = this.favorAttractions.filter(
          (data) => data.id !== id
        );
        this.saveStorage();
        return;
      } else {
        this.favorAttractions.push(favoritedAttraction);
        this.saveStorage();
        return;
      }
    },
    async saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorAttractions));
    },
  },
};
</script>