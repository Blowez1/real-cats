<template>
  <main>
    <div class="container">
      <div class="box">
        <div class="box-header">
          <h1>Sign In</h1>
        </div>
        <div class="box-body">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              autocomplete="current-username"
              type="username"
              class="form-control"
              id="username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              autocomplete="current-password"
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
          <button class="btn btn-primary" @click="checkLogin()">Sign In</button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({ login: "auth/login" }),
    checkLogin() {
      const user = {
        username: this.username,
        password: this.password,
      };

      if (this.username == "" && this.password == "") {
        alert("Lütfen tüm alanları doldurunuz.");
      } else {
        this.login(user);
      }
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

.box {
  &-header {
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: #003c95;
    }
  }
  &-body {
    margin-top: 2rem;
    .form-group {
      &:not(:last-child) {
        margin-bottom: 1.25rem;
      }

      label {
        font-size: 1.25rem;
        font-weight: 500;
        color: #003c95;
      }
      input {
        margin-top: 1rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #003c95;
        border: none;
        border-bottom: 1px solid #003c95;
        padding: 1.25rem;
        width: 100%;
        background-color: #ddebff;
        &:focus {
          outline: none;
        }
      }
    }
    button {
      background-color: #003c95;
      padding: 1.25rem 3.5rem;
      border: none;
      color: #fff;
      cursor: pointer;
      font-weight: 500;
      font-size: 1rem;
      font-family: "Rubik", sans-serif;
      &:focus {
        outline: none;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
    .container {
        padding:0 1.5rem;
    }
}

</style>