<script>
import ProjectList from "../components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      type: {},
      projects: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/types/",
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
    fetchProjects(uri = this.api.baseUrl + this.$route.params.type_id) {
      axios
        .get(uri)
        .then((response) => {
          console.log(response.data);
          this.type = response.data.type;
          this.projects = response.data.projects.data;
          this.pagination.next = response.data.projects.next_page_url;
          this.pagination.prev = response.data.projects.prev_page_url;
          this.pagination.links = response.data.projects.links;
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
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
    <h1 class="my-3">Projects by type: {{ type.label }}</h1>
    <ProjectList
      :projects="projects"
      :pagination="pagination"
      @fetchProjects="fetchProjects"
    />
  </div>
</template>

<style lang="scss" scoped></style>
