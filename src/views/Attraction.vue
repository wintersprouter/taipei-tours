<template>
  <div class="container">
    <section class="tab"><NavTabs /></section>
    <section class="attraction">
      <h1 class="attraction-title">{{ attraction.name }}</h1>
      <div class="attraction-content">
        <div class="slider">
          <div class="slides">
            <div v-for="image in images" :key="image.id" :id="image.id">
              <img
                :src="image.src"
                alt="attraction-image"
                class="attraction-image"
              />
            </div>
          </div>
          <p class="attraction-album">{{ attraction.name }}．照片集</p>
        </div>
        <div class="attraction-content">
          <div class="attraction-content">
            <p class="attraction-content-title">景點介紹</p>
            <p class="attraction-content-text">
              {{ attraction.introduction }}
            </p>
          </div>
          <div class="attraction-info">
            <p class="attraction-info-title">景點資訊</p>
            <p>
              <font-awesome-icon
                icon="map-marker-alt"
                class="attraction-icon"
              ></font-awesome-icon>
              地址：{{ attraction.address }}
            </p>
            <p v-if="attraction.open_time">
              <font-awesome-icon
                icon="clock"
                class="attraction-icon"
              ></font-awesome-icon>
              開放時間：{{ attraction.open_time }}
            </p>
            <p v-if="attraction.tel">
              <font-awesome-icon
                icon="phone-alt"
                class="attraction-icon"
              ></font-awesome-icon>
              電話：{{ attraction.tel }}
            </p>
            <p v-if="attraction.official_site">
              <font-awesome-icon
                icon="external-link-alt"
                class="attraction-icon"
              ></font-awesome-icon>
              官網：<a :href="attraction.official_site"
                >{{ attraction.name }}官網</a
              >
            </p>
          </div>
          <p class="attraction-footer">
            <em class="attraction-modified"
              >update date: {{ attraction.modified }}</em
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const STORAGE_KEY = "favorite-list";
import NavTabs from "../components/NavTabs.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { NavTabs },
  data() {
    return {
      favorAttractions: [],
      attraction: {},
      images: [
        {
          id: -1,
          src: "",
        },
      ],
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchAttraction(id);
    this.generagteImages();
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchAttraction(id);
    next();
  },
  methods: {
    fetchAttraction(attractionId) {
      this.favorAttractions =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const attraction = this.favorAttractions.filter(
        (item) => item.id == attractionId
      );
      this.attraction = attraction[0];
    },
    generagteImages() {
      this.images = this.attraction.images;

      this.images.map((image) => {
        image.id = "slide-" + uuidv4();
      });
    },
  },
};
</script> 