<template>
  <div class="login pt-5 text-center">
    <b-container fluid>
      <b-form-group>
        <form class="login" @submit.prevent="userLogin">
          <b-row>
            <b-col md="6" offset-md="3"><h1>Login</h1> </b-col></b-row
          >
          <label for="password">Email</label>
          <b-row>
            <b-col md="6" offset-md="3">
              <b-form-input
                required
                v-model="email"
                type="email"
                placeholder="Email"
            /></b-col>
          </b-row>
          <label for="password">Password</label>
          <b-row>
            <b-col md="6" offset-md="3">
              <b-form-input
                required
                v-model="password"
                type="password"
                placeholder="Password"
            /></b-col>
          </b-row>
          <br />
          <div>
            <b-col md="6" offset-md="3">
              <b-button type="submit" block variant="info">Login</b-button>
            </b-col>
          </div>
        </form>
      </b-form-group>
      <br>
      <div>
        <b-link :to="'register'"><b-button>Register</b-button></b-link>
      </div>
    </b-container>
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
