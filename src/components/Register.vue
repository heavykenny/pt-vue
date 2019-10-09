<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="userRegister">
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required />
      </div>

      <label for="email">Email</label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>
      <label for="phone">Phone Number</label>
      <div>
        <input id="phone" type="text" v-model="phone" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  methods: {
    userRegister: function() {
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/view-hobby"))
        .catch(err => console.log(err));
    }
  }
};
</script>
