<template>
  <div class="container">
    <section class="tab"><NavTabs /></section>
    <section class="attractions">
      <div v-if="isEmpty">尚無最愛的景點</div>
      <div class="container">
        <div class="attractions-wrapper">
          <Attraction
            v-for="favorAttraction in favorAttractions"
            :key="favorAttraction.id"
            :initial-attraction="favorAttraction"
            @after-add-favorite="afterAddFavorite"
            @after-remove-favorite="afterAddFavorite"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs.vue";
import Attraction from "../components/Attraction.vue";
const STORAGE_KEY = "favorite-list";
export default {
  name: "Favorite",
  components: { NavTabs, Attraction },
  data() {
    return {
      favorAttractions: [],
      isEmpty: false,
    };
  },
  created() {
    this.fetchFavoriteAttractions();
  },
  methods: {
    async fetchFavoriteAttractions() {
      this.favorAttractions =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      if (!this.favorAttractions.length) {
        this.isEmpty = true;
      }
    },
    afterAddFavorite(favoritedAttraction) {
      const { id, name } = favoritedAttraction;
      const isFavorited = this.favorAttractions.some((data) => data.id === id);
      if (isFavorited) {
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
