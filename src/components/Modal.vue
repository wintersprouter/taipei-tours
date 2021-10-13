<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">{{ attraction.name }}</slot>
          <button
            type="button"
            class="button-close"
            @click="close"
            aria-label="Close modal"
          >
            &times;
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="modal-body-description">
              <div class="slider">
                <div class="slides">
                  <div v-for="image in images" :key="image.id" :id="image.id">
                    <img
                      :src="image.src"
                      alt="attraction-image"
                      class="modal-body-image"
                    />
                  </div>
                </div>
                <p class="modal-album">{{ attraction.name }}．照片集</p>
              </div>
              <div class="modal-body-content">
                <div class="modal-description">
                  <p class="modal-description-title">景點介紹</p>
                  <p class="modal-description-text">
                    {{ attraction.introduction }}
                  </p>
                </div>
                <div class="modal-info">
                  <p class="modal-info-title">景點資訊</p>
                  <p>
                    <font-awesome-icon
                      icon="map-marker-alt"
                      class="modal-icon"
                    ></font-awesome-icon>
                    地址：{{ attraction.address }}
                  </p>
                  <p v-if="attraction.open_time">
                    <font-awesome-icon
                      icon="clock"
                      class="modal-icon"
                    ></font-awesome-icon>
                    開放時間：{{ attraction.open_time }}
                  </p>
                  <p v-if="attraction.tel">
                    <font-awesome-icon
                      icon="phone-alt"
                      class="modal-icon"
                    ></font-awesome-icon>
                    電話：{{ attraction.tel }}
                  </p>
                  <p v-if="attraction.official_site">
                    <font-awesome-icon
                      icon="external-link-alt"
                      class="modal-icon"
                    ></font-awesome-icon>
                    官網：<a :href="attraction.official_site"
                      >{{ attraction.name }}官網</a
                    >
                  </p>
                </div>
                <p>
                  <em class="modal-modified"
                    >update date: {{ attraction.modified }}</em
                  >
                </p>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Modal",
  props: {
    initialAttraction: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      attraction: this.initialAttraction,
      images: [
        {
          id: -1,
          src: "",
        },
      ],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    generagteImages() {
      this.images = this.attraction.images;

      this.images.map((image) => {
        image.id = "slide-" + uuidv4();
      });
    },
  },
  created() {
    this.generagteImages();
  },
};
</script> 