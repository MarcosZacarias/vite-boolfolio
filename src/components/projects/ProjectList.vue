<script>
import ProjectCard from "./ProjectCard.vue";
import Pagination from "../ui/Pagination.vue";

import axios from "axios";

export default {
  data() {
    return {};
  },

  components: {
    ProjectCard,
    Pagination,
  },

  props: {
    projects: Array,
    pagination: Object,
  },

  methods: {
    paginationUrl(linkUrl) {
      this.$emit("fetchProjects", linkUrl);
    },
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    <div class="col" v-for="project in projects">
      <ProjectCard :project="project" :isDetail="false" />
    </div>
  </div>
  <Pagination :pagination="pagination" @paginationUrl="paginationUrl" />
</template>

<style lang="scss" scoped></style>
