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
      axios
        .get(this.api.baseUrl + this.$route.params.slug)
        .then((response) => {
          this.project = response.data;
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
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
    <ProjectCard v-if="project" :project="project" :isDetail="true" />
  </div>
</template>

<style lang="scss" scoped></style>
