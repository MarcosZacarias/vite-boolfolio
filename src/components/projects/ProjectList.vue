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
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects(uri = this.api.baseUrl) {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
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
</template>

<style lang="scss" scoped></style>
