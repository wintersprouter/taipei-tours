<template>
  <div class="container">
    <ul class="nav-pills">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home', query: { categoryIds: '', page: '1' } }"
          :class="['nav-link', { active: categoryIds === null }]"
          exact
        >
          全部
        </router-link>
      </li>
      <li v-for="category in categories" :key="category.id" class="nav-item">
        <router-link
          class="nav-link"
          :to="{ name: 'Home', query: { categoryIds: category.id, page: '1' } }"
          :class="['nav-link', { active: categoryIds === category.id }]"
          exact
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
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
        >
          {{ category.name }}
        </option>
      </select>
    </div>
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
