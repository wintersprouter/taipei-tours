<template>
  <ul class="nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Home' }"> 全部 </router-link>
    </li>
    <li v-for="category in categories" :key="category.id" class="nav-item">
      <router-link
        class="nav-link"
        :to="{ name: 'Home', query: { categoryIds: category.id } }"
        :class="['nav-link', { active: categoryIds === category.id }]"
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
