<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },

  props: {
    pagination: Object,
  },
};
</script>

<template>
  <nav aria-label="Page navigation example" class="my-3">
    <ul class="pagination">
      <li
        @click="$emit('paginationUrl', link.url)"
        v-for="link in pagination.links"
        class="page-item pe-auto"
        :class="{ active: link.active }"
        role="button"
      >
        <a class="page-link" v-html="link.label"></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
