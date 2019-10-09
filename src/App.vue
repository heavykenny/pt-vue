<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'create-hobby', params: { userId: 123 }}">Add Hobby | </router-link>
      <router-link :to="{ name: 'view-hobby', params: { userId: 123 }}">View All Hobby | </router-link>
      <span v-if="isLoggedIn"><a @click="logout">Logout</a></span
      >
      <p v-if="isLoggedIn">
        Welcome {{ this.user.name }}</p
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import axios from "axios";
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  data() {
    return {
      user: "",
      token: this.$store.state.token
    };
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  mounted() {
    // let url = "https://glacial-spire-34119.herokuapp.com/api/get-user-details";
    let url = "https://localhost/pt-test/public/api/get-user-details";
    axios
      .get(url)
      .then(response => {
        this.user = response.data.user;
        localStorage.setItem("user", JSON.stringify(this.user));
      })
      .catch(error => {
        console.log("User details" + error);
      });
  }
};
</script>
