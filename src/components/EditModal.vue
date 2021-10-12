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
          <slot name="header">編輯景點內容：{{ attraction.name }}</slot>
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
              <div class="modal-body-content">
                <div class="modal-description">
                  <p class="modal-description-title">景點介紹</p>
                  <p class="modal-description-text">
                    {{ attraction.introduction }}
                  </p>
                </div>
                <div class="modal-info">
                  <p class="modal-info-title">景點資訊</p>
                  <p>地址：{{ attraction.address }}</p>
                  <p>開放時間：{{ attraction.open_time }}</p>
                  <p>電話：{{ attraction.tel }}</p>
                </div>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
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
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script> 
