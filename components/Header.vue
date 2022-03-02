<template>
  <header>
    <img class="logo" src="~/assets/img/logo-white.png" alt="" />

    <div @click="toggleMenu()" class="open-btn" :class="checkToggle">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <nav :class="checkToggle">
      <ul>
        <li @click="toggleMenu()"><nuxt-link to="/">Cats</nuxt-link></li>
        <li @click="toggleMenu()" v-if="loggedIn">
          <a
            style="cursor: pointer; text-decoration: underline"
            @click="logOut()"
            >Log Out</a
          >
        </li>
        <li @click="toggleMenu()" v-else>
          <nuxt-link to="/login">Sign In</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapGetters("system", ["checkToggle"]),
  },
  methods: {
    ...mapActions({ toggleMenu: "system/toggle", logOut: "auth/logout" }),
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
    padding: 0 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .logo {
      position: static;
      top: 0;
      left: 0;
      transform: none;
    }
    .open-btn {
      width: 25px;
      height: 20px;
      display: block;
      position: relative;

      span {
        background-color: #fff;
        width: 20px;
        height: 2px;
        left: 0;
        position: absolute;
        transition: 150ms ease-in-out all;

        &:nth-child(1) {
          top: 2px;
        }

        &:nth-child(2) {
          top: 9px;
        }

        &:nth-child(3) {
          bottom: 2px;
        }
      }

      &.active {
        span {
          top: 50%;
          &:nth-child(1) {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:nth-child(3) {
            bottom: 2px;
             transform: rotate(-45deg);
          }
        }
      }
    }

    nav {
      position: fixed;
      padding: 4rem 0;
      z-index: 0;
      background-color: #052b64;
      width: 100%;
      top: 15rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      left: 0;
      ul {
        flex-direction: column;
        align-items: center;
        li {
          &:not(:last-child) {
            margin-bottom: 1rem;
          }
        }
      }

      &.active {
        opacity: 1;
        visibility: visible;
        top: 5rem;
        z-index: 999;
      }
    }
  }
}
</style>