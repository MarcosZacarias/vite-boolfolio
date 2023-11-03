<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  // components: {
  //   MyComponent,
  // },

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card h-100" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    <div class="card-header" :style="{ backgroundColor: project.type.color }">
      <strong>Type: {{ project.type.label }}</strong>
      <div v-if="project.technologies">
        <span
          v-for="technology in project.technologies"
          class="badge"
          :style="{ backgroundColor: technology.color }"
          >{{ technology.label }}</span
        >
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
