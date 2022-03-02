<template>
  <Cats />
</template>


<script>
import Cats from "../components/Cats/index.vue";

export default {
  name: "IndexPage",
  middleware: "isAuthenticated",
  components: {
    Cats,
  },
  async asyncData({ store }) {
    await store.dispatch("cat/get_cat");
  },
};
</script>
