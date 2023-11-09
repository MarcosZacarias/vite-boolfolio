<script>
import { RouterView } from "vue-router";
import Navbar from "./components/ui/navbar.vue";
export default {
  data() {
    return {};
  },

  components: {
    Navbar,
    RouterView,
  },
};
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
