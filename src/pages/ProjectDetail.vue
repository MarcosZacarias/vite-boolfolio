<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Project Detail",
      api: {
        baseUrl: "http://127.0.0.1:8000/api/projects/",
      },
      project: null,
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProject() {
      axios.get(this.api.baseUrl + this.$route.params.slug).then((response) => {
        this.project = response.data;
      });
    },
  },

  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-3">Project Detail</h1>
    <ProjectCard :project="project" :isDetail="true" />
  </div>
</template>

<style lang="scss" scoped></style>
