<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/projects",
      },
      pagination: {
        next: null,
        prev: null,
        links: null,
      },
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl) {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.next = response.data.next_page_url;
        this.pagination.prev = response.data.prev_page_url;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
    <div class="col" v-for="project in projects">
      <ProjectCard :project="project" />
    </div>
  </div>
  <nav aria-label="Page navigation example" class="my-3">
    <ul class="pagination">
      <li
        @click="fetchProjects(link.url)"
        v-for="link in pagination.links"
        class="page-item"
      >
        <a class="page-link">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
