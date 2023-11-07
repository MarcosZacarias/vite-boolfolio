<script>
import { RouterView } from "vue-router";
import ProjectList from "./components/projects/ProjectList.vue";
export default {
  data() {
    return {};
  },

  components: {
    ProjectList,
    RouterView,
  },
};
</script>

<template>
  <div class="container">
    <h1>Navbar</h1>
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
