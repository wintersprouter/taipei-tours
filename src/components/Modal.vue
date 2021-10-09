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
                <p>
                  {{ attraction.name }}
                </p>
              </div>
              <div class="modal-body-content">
                <div class="modal-description">
                  <p class="modal-description-title">景點介紹</p>
                  <p>
                    {{ attraction.introduction }}
                  </p>
                </div>
                <div class="modal-info">
                  <p class="modal-info-title">景點資訊</p>
                  <p>地址：{{ attraction.address }}</p>
                  <p v-if="attraction.open_time">
                    開放時間：{{ attraction.open_time }}
                  </p>
                  <p v-if="attraction.tel">電話：{{ attraction.tel }}</p>
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
        <footer class="modal-footer">
          <slot name="footer">加入收藏</slot>
        </footer>
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
  mounted() {
    this.generagteImages();
  },
};
</script> 