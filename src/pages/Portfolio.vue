<script>
import ProjectList from "../components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Project list",
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
    ProjectList,
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
  <div class="container">
    <h1 class="my-3">Project List</h1>
    <ProjectList
      :projects="projects"
      :pagination="pagination"
      @fetchProjects="fetchProjects"
    />
  </div>
</template>

<style lang="scss" scoped></style>
