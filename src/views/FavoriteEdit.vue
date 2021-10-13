<template>
  <div class="container">
    <section class="tab"><NavTabs /></section>
    <section class="edit">
      <form class="form" @submit.stop.prevent="handleSubmit">
        <h1>編輯景點</h1>
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
          <label for="tel">電話 <small>*必填欄位</small></label>
          <input
            id="tel"
            class="form-control"
            v-model="attraction.tel"
            type="text"
            name="tel"
            maxlength="20"
            placeholder="請輸入景點電話"
            required
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
          <label for="introduction">景點介紹 <small>*必填欄位</small></label>
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
    </section>
  </div>
</template>
<script>
import NavTabs from "../components/NavTabs.vue";
const STORAGE_KEY = "favorite-list";
export default {
  components: { NavTabs },
  data() {
    return {
      favorAttractions: [],
      attraction: {},
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchAttraction(id);
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
      console.log(this.favorAttractions);
      const attraction = this.favorAttractions.filter(
        (item) => item.id == attractionId
      );
      this.attraction = attraction[0];
    },
    handleSubmit() {
      const { name, tel, address, introduction } = this.attraction;
      if (!name || !tel || !address || !introduction) {
        alert("此欄位不得空白");
        return;
      }
      let re = /^(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}$/;
      if (!re.test(tel.value)) alert("電話格式不正確");
    },
  },
  watch: {
    initialAttraction(newValue) {
      this.attraction = { ...this.attraction, ...newValue };
    },
  },
};
</script>
