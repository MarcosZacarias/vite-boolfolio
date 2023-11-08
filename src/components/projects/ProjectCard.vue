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
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="card h-100">
    <img
      v-if="isDetail && project.cover_img"
      :src="project.cover_img"
      class="card-img-top"
      alt="..."
    />
    <div class="card-header" :style="{ backgroundColor: project.type?.color }">
      <strong>Type: {{ project.type?.label }}</strong>
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
      <p class="card-text">{{ project.description }}</p>
      <div v-if="!isDetail" class="card-footer">
        <router-link
          :to="{
            name: 'project-detail',
            params: {
              slug: project.slug,
            },
          }"
          class="btn btn-primary"
        >
          Vedi
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
