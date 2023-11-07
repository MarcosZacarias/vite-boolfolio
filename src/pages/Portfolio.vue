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
  <ProjectList />
</template>

<style lang="scss" scoped></style>
