<template>
  <div class="container">
    <section class="tab"><NavTabs /></section>
    <section class="attractions">
      <div v-if="isEmpty">尚無最愛的景點</div>
      <div class="container">
        <div class="attractions-wrapper">
          <Attraction
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
        :previous-page="previousPage"
        :next-page="nextPage"
        :is-favorited-list="isFavoritedList"
        @after-click-page="fetchFavoriteAttractions"
      />
    </footer>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs.vue";
import Attraction from "../components/Attraction.vue";
import Pagination from "../components/Pagination.vue";
const STORAGE_KEY = "favorite-list";
export default {
  name: "Favorite",
  components: { NavTabs, Attraction, Pagination },
  data() {
    return {
      favorAttractions: [],
      attractions: [],
      isEmpty: false,
      pages: 1,
      totalPage: [],
      currentPage: 1,
      isFavoritedList: true,
    };
  },
  created() {
    this.fetchFavoriteAttractions();
  },
  methods: {
    async fetchFavoriteAttractions(page) {
      this.favorAttractions =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      if (!this.favorAttractions.length) {
        this.isEmpty = true;
      }
      this.currentPage = page ? page : 1;
      this.attractions = this.getAttractionsByPage(this.currentPage);
      this.generatePagination();
    },
    generatePagination() {
      const pageLimit = 30;
      const totalpages = [];
      const total = this.favorAttractions.length;
      const pages = Math.ceil(total / pageLimit);
      for (let i = 1; i <= pages; i++) {
        totalpages.push(i);
      }
      this.pages = pages;
      this.totalPage = totalpages;
    },
    getAttractionsByPage(page) {
      const pageLimit = 30;
      const startIndex = (page - 1) * pageLimit;
      return this.favorAttractions.slice(startIndex, startIndex + pageLimit);
    },

    afterAddFavorite(favoritedAttraction) {
      const { id, name } = favoritedAttraction;
      const isFavorited = this.favorAttractions.some((data) => data.id === id);
      if (isFavorited) {
        this.attractions = this.attractions.filter((data) => data.id !== id);
        this.favorAttractions = this.favorAttractions.filter(
          (data) => data.id !== id
        );
        this.saveStorage();
        return alert(` ${name}從我的最愛中移除`);
      } else {
        this.favorAttractions.push(favoritedAttraction);
        this.saveStorage();
        return alert(`${name}加入我的最愛!`);
      }
    },
    async saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorAttractions));
    },
  },
};
</script>
<style lang="scss" scoped>
.tab {
  margin-bottom: 5rem;
}
</style>
