<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    const token = localStorage.getItem("token");

    if (token) {
      this.$store.dispatch("auth/setToken", token);
    } else {
      this.$store.dispatch("auth/setToken", null);
    }
  },
};
</script>