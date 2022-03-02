<template>
  <main>
    <div class="container">
      <div class="cat">
        <transition name="fade">
          <img :src="cat.url" :key="cat.id" alt="cat image" />
        </transition>
      </div>

      <button @click="changeCat()" class="change-btn">Değiştir</button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "IndexPage",
  middleware: "isAuthenticated",
  computed: {
    ...mapState("cat", ["cat"]),
  },
  methods: {
    ...mapActions({ changeCat: "cat/get_cat" }),
  },
  async asyncData({ store }) {
    await store.dispatch("cat/get_cat");
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  transition: opacity 1s;
  opacity: 0;
}


@media only screen and (max-width: 768px) {
  .cat {
    width: 15rem;
    height: 15rem;
  }
}
</style>