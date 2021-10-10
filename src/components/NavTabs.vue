<template>
  <ul class="nav-tabs">
    <li v-for="tab in tabs" :key="tab.id" class="nav-tabs-item">
      <router-link :to="tab.path" class="nav-tabs-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "台北景點總覽",
          path: "/",
        },
        {
          id: uuidv4(),
          title: "我的最愛",
          path: "/favorite",
        },
      ],
    };
  },
};
</script>

