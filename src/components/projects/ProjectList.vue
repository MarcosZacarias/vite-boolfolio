<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {};
  },

  components: {
    ProjectCard,
  },

  props: {
    projects: Array,
    pagination: Object,
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    <div class="col" v-for="project in projects">
      <ProjectCard :project="project" :isDetail="false" />
    </div>
  </div>
  <nav aria-label="Page navigation example" class="my-3">
    <ul class="pagination">
      <li
        @click="fetchProjects(link.url)"
        v-for="link in pagination.links"
        class="page-item"
      >
        <a class="page-link" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
