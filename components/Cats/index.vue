<template>
  <main>
    <div class="container">
      <div class="cat">
        <transition name="fade">
          <img :src="cat.url" :key="cat.id" alt="cat image" />
        </transition>
      </div>
      {{ loading }}
      <button @click="getCat()" :class="loadingClass(loading)" class="change-btn">
        <span class="btn-text">Change</span>
        <span class="btn-loader">
          <img src="~/assets/img/loader.svg" alt="">
        </span>
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CatsComponent",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState("cat", ["cat"]),
  },
  methods: {
    ...mapActions({ changeCat: "cat/get_cat" }),
    getCat() {
      this.loading = true;
      this.changeCat().then(() => {
        this.loading = false;
      });
    },
    loadingClass(bool) {
      return bool ? "loading" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5.313rem;
}

.cat {
  width: 32.5rem;
  height: 32.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.change-btn {
  margin-top: 5.313rem;
  background-color: #003c95;
  padding: 1.25rem 3.5rem;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.35rem;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  display: flex;
  position: relative;



  .btn-loader {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


  &.loading { 

    .btn-text {
      visibility: hidden;
    }
    .btn-loader {
      opacity: 1;
      visibility: visible;
    }
  }
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .cat {
    width: 15rem;
    height: 15rem;
  }
}
</style>