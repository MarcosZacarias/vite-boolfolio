<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "404",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <router-link :to="{ name: 'homepage' }">Torna alla Homepage</router-link>
</template>

<style lang="scss" scoped></style>
