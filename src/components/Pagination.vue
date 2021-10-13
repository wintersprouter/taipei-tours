<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <template v-if="isFavoritedList">
        <li
          v-for="page in totalPage"
          class="page-item"
          :key="page"
          :class="['page-item', { active: currentPage === page }]"
        >
          <a class="page-link" @click.stop.prevent="switchPage(page)">
            {{ page }}
          </a>
        </li>
      </template>
      <template v-else>
        <li
          v-show="previousPage"
          :class="['page-item', { disabled: currentPage === 1 }]"
        >
          <router-link
            class="page-link"
            aria-label="Previous"
            :to="{
              name: 'Home',
              query: { categoryIds, page: previousPage },
            }"
          >
            <span aria-hidden="true">&laquo;</span>
          </router-link>
        </li>

        <li
          v-for="page in totalPage"
          :key="page"
          class="page-item-number"
          :class="['page-item', { active: currentPage === page }]"
        >
          <router-link
            class="page-link page-link-number"
            :to="{ name: 'Home', query: { categoryIds, page } }"
          >
            {{ page }}
          </router-link>
        </li>

        <li
          v-show="nextPage"
          :class="['page-item', { disabled: currentPage === totalPage.length }]"
        >
          <router-link
            class="page-link"
            :to="{ name: 'Home', query: { categoryIds, page: nextPage } }"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    categoryIds: {
      type: [String, Number],
      default: "",
    },
    pages: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    previousPage: {
      type: Number,
      default: 1,
    },
    nextPage: {
      type: Number,
      default: 1,
    },
    isFavoritedList: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    switchPage(page) {
      this.$emit("after-click-page", page);
    },
  },
};
</script>
