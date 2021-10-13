<template>
  <div class="select-dropdown">
    <select
      @change="
        $router.push({
          name: 'Home',
          query: { categoryIds: $event.target.value, page: '1' },
        })
      "
    >
      <option value=" ">全部</option>
      <option
        :value="category.id"
        v-for="category in categories"
        :key="category.id"
        :selected="this.$route.query.categoryIds === category.id"
      >
        {{ category.name }}
      </option>
    </select>
  </div>
</template>
    <script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      categoryIds: " ",
      selected: " ",
    };
  },
  methods: {
    changeRout() {
      this.$router.push({
        path: `home?categoryIds=${this.categoryIds}+&page=1`,
      });
    },
  },
};
</script>