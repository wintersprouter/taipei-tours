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
              <form>
                <div class="modal-body-content">
                  <div class="form-group">
                    <label for="name">景點名稱</label>
                    <input
                      id="name"
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
                      v-model="attraction.tel"
                      type="text"
                      name="tel"
                      placeholder="請輸入景點電話"
                    />
                  </div>
                  <div class="form-group">
                    <label for="address">景點地址</label>
                    <input
                      id="address"
                      v-model="attraction.address"
                      type="text"
                      placeholder="請輸入景點地址"
                      name="address"
                    />
                  </div>
                  <div class="form-group">
                    <label for="official_site">景點地址</label>
                    <input
                      id="official_site"
                      v-model="attraction.official_site"
                      type="text"
                      placeholder="請輸入景點官網"
                      name="official_site"
                    />
                  </div>
                  <div class="form-group">
                    <label for="open_time">景點開放時間</label>
                    <input
                      id="open_time"
                      v-model="attraction.open_time"
                      type="text"
                      placeholder="請輸入景點開放時間"
                      name="open_time"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="introduction">景點介紹</label>
                  <textarea
                    id="introduction"
                    v-model="attraction.introduction"
                    rows="5"
                    name="introduction"
                  />
                </div>
                <fieldset class="form-group" name="category">
                  <legend>景點類別</legend>

                  <div
                    class="form-check"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    <input
                      class="form-check-input"
                      name="category-type"
                      type="checkbox"
                      :value="category.id"
                    />
                    <label class="form-check-label" :for="name">{{
                      category.name
                    }}</label>
                  </div>
                </fieldset>
                <button type="submit">儲存</button>
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
        category: [],
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
        category: [],
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
    this.fetchCategories();
    this.attraction = {
      ...this.attraction,
      ...this.initialAttraction,
    };
  },
  methods: {
    fetchCategories() {
      this.categories = [
        {
          id: 11,
          name: "養生溫泉",
        },
        {
          id: 12,
          name: "單車遊蹤",
        },
        {
          id: 13,
          name: "歷史建築",
        },
        {
          id: 14,
          name: "宗教信仰",
        },
        {
          id: 15,
          name: "藝文館所",
        },
        {
          id: 18,
          name: "公共藝術",
        },
        {
          id: 16,
          name: "戶外踏青",
        },
        {
          id: 17,
          name: "藍色水路",
        },
        {
          id: 19,
          name: "親子共遊",
        },
        {
          id: 20,
          name: "北北基景點",
        },
        {
          id: 23,
          name: "夜市商圈",
        },
        {
          id: 24,
          name: "主題商街",
        },
        {
          id: 25,
          name: "無障礙旅遊推薦景點",
        },
      ];
    },
    close() {
      this.$emit("close");
    },
  },
};
</script> 
