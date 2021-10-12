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
          <slot name="header">編輯景點</slot>
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
              <form class="form" @submit.stop.prevent="handleSubmit" novalidate>
                <div class="form-group">
                  <label for="name">景點名稱<small>*必填欄位</small></label>
                  <input
                    id="name"
                    class="form-control"
                    v-model="attraction.name"
                    type="text"
                    name="name"
                    placeholder="請輸入景點名稱"
                    maxlength="20"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="tel">電話</label>
                  <input
                    id="tel"
                    class="form-control"
                    v-model="attraction.tel"
                    type="text"
                    name="tel"
                    maxlength="20"
                    placeholder="請輸入景點電話"
                  />
                </div>
                <div class="form-group">
                  <label for="address">景點地址<small>*必填欄位</small></label>
                  <input
                    id="address"
                    class="form-control"
                    v-model="attraction.address"
                    type="text"
                    placeholder="請輸入景點地址"
                    name="address"
                    maxlength="30"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="official_site">景點官網</label>
                  <input
                    id="official_site"
                    class="form-control"
                    v-model="attraction.official_site"
                    type="text"
                    placeholder="請輸入景點官網"
                    name="official_site"
                    maxlength="50"
                  />
                </div>
                <div class="form-group">
                  <label for="open_time">景點開放時間</label>
                  <input
                    id="open_time"
                    class="form-control"
                    v-model="attraction.open_time"
                    type="text"
                    placeholder="請輸入景點開放時間"
                    name="open_time"
                    maxlength="50"
                  />
                </div>

                <div class="form-group">
                  <label for="introduction"
                    >景點介紹 <small>*必填欄位</small></label
                  >
                  <textarea
                    id="introduction"
                    v-model="attraction.introduction"
                    rows="6"
                    name="introduction"
                    maxlength="250"
                    required
                  />
                </div>
                <button type="submit" class="button-save">儲存</button>
              </form>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "EditModal",
  data() {
    return {
      categories: [],
      attraction: {
        id: -1,
        name: "",
        address: "",
        introduction: "",
        official_site: "",
        open_time: "",
        tel: "",
      },
    };
  },
  props: {
    initialAttraction: {
      type: Object,
      default: () => ({
        id: -1,
        name: "",
        address: "",
        introduction: "",
        official_site: "",
        open_time: "",
        tel: "",
      }),
    },
  },

  watch: {
    initialAttraction(newValue) {
      this.attraction = { ...this.attraction, ...newValue };
    },
  },
  created() {
    this.attraction = {
      ...this.attraction,
      ...this.initialAttraction,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleSubmit() {
      // if (!form.checkValidity()) {
      //   e.stopPropagation();
      //   e.preventDefault();
      //   alert("Form invalid"); //驗證不通過，就跳 alert
      // }
    },
  },
};
</script> 
