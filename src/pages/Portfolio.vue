<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Project list",
    };
  },

  components: {
    ProjectList,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-3">Project List</h1>
    <ProjectList />
  </div>
</template>

<style lang="scss" scoped></style>
