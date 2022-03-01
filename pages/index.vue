<template>
  <div>
    <div>{{ cat }}</div>
    <div @click="test()">test</div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "IndexPage",
  middleware: "isAuthenticated",
  computed: {
    ...mapState('cat', ['cat']),
  },
  async asyncData({ store }) {
    await store.dispatch("cat/get_cat");
  }
};
</script>
