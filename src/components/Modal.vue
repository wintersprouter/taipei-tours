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
          <slot name="header">景點名稱</slot>
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
                  <div id="slide-1">
                    <img src="https://www.travel.taipei/image/182754"
                  alt=""
                  class="modal-body-image"
                    />
                  </div>
                  <div id="slide-2">
                    <img src="https://www.travel.taipei/image/63485"
                  alt=""
                  class="modal-body-image"
                    />
                  </div>
                  <div id="slide-3">3</div>
                  <div id="slide-4">4</div>
                  <div id="slide-5">5</div>
                </div>
              </div>
             
              <div class="modal-body-content">
                <p><em class="modal-modified">update date: 2020/01/05</em></p>
                <p class="modal-description">
                  白石湖－地名的由來\r\n說到「白石湖」，我們一定要先知道其地名的由來！據說早年先民將山區中相對低點開闊處，自然形成之山坳地勢，稱之為「湖」，同時當地盛產潔白的白色砂岩，「白石湖」這地名由此而生，所以「白石湖」，其實不是一座湖唷！清末
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
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" >

.slider {
  width: 50%;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: $color-primary-light;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 450px;
  margin-right: 30px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.slides > div:target {
  transform: scale(0.8); 
}

</style>