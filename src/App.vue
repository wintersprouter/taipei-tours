<template>
  <div id="app">
    <Navbar />
    <main role="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style lang="scss">
@import "assets/scss/main.scss";
</style>