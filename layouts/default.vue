<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    const token = localStorage.getItem("token");
    
    if (token) {
      this.$store.dispatch("auth/fetchUser", token);
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss" >
body {
  background: url("../assets/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Rubik", sans-serif;
  min-height: 100vh;
  overflow: hidden;
  font-weight: 500;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>