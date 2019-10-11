<template>
  <div class="register pt-5 text-center">
    <b-container fluid>
      <b-form-group>
        <h1>Register</h1>
        <form @submit.prevent="userRegister">
          <label for="name">Name</label>
          <div>
            <b-col md="6" offset-md="3"
              ><b-form-input id="name" type="text" v-model="name" required />
            </b-col>
          </div>
          <label for="email">Email</label>
          <div>
            <b-col md="6" offset-md="3"
              ><b-form-input id="email" type="email" v-model="email" required />
            </b-col>
          </div>
          <label for="phone">Phone Number</label>
          <div>
            <b-col md="6" offset-md="3"
              ><b-form-input id="phone" type="text" v-model="phone" required placeholder="+2348169260416"/>
            </b-col>
          </div>
          <label for="password">Password</label>
          <div>
            <b-col md="6" offset-md="3"
              ><b-form-input
                id="password"
                type="password"
                v-model="password"
                required
              />
            </b-col>
          </div>
          <label for="password-confirm">Confirm Password</label>
          <div>
            <b-col md="6" offset-md="3"
              ><b-form-input
                id="password-confirm"
                type="password"
                v-model="password_confirmation"
                required
              />
            </b-col>
          </div>
          <br>
          <div>
            <b-col md="6" offset-md="3">
              <b-button type="submit" block variant="info">Register</b-button>
            </b-col>
          </div>
        </form>
      </b-form-group>
      <br><br>
      <div>
        <b-link :to="'login'"><b-button>Login</b-button></b-link>
      </div></b-container
    >
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
        password_confirmation: this.password_confirmation
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/view-hobby"))
        .catch(err => console.log(err));
    }
  }
};
</script>
