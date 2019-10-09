<template>
  <div class="login">
    <form class="login" @submit.prevent="userLogin">
      <h1>Login</h1>
      <label for="password">Email</label>
      <div>
        <input required v-model="email" type="email" placeholder="Email" />
      </div>

      <label for="password">Password</label>
      <div>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    userLogin: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/view-hobby"))
        .catch(err => console.log(err));
    }
  }
};
</script>
