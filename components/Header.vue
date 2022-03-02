<template>
  <header>
    <img class="logo" src="~/assets/img/logo-white.png" alt="" />
    <nav>
      <ul>
        <li><nuxt-link to="/">Kediler</nuxt-link></li>
        <li v-if="loggedIn"><a style="cursor:pointer; text-decoration: underline" @click="logOut()">Çıkış Yap</a></li>
        <li v-else><nuxt-link to="/login">Giriş Yap</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  methods: {
    ...mapActions({ logOut: "auth/logout" }),
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: #003c95;
  height: 5rem;
  width: 100%;
  position: relative;
  padding: 1.6rem 2rem;

  nav {
    ul {
      width: 100%;
      display: flex;
      list-style: none;
      justify-content: space-between;

      li {
        a {
          font-size: 1.3rem;
          text-decoration: none;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }

  .logo {
    width: 12.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@media only screen and (max-width: 768px) {
  header {
    padding: 0;
    width: 100%;
  }
}
</style>