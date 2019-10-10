<template>
  <div id="app">
    <b-container fluid>
      <div id="nav">
        <router-link v-if="isLoggedIn" :to="{ name: 'create-hobby' }"
          >Add Hobby |
        </router-link>
        <router-link v-if="isLoggedIn" :to="{ name: 'view-hobby' }"
          >View All Hobby |
        </router-link>
        <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
      </div>
      <router-view />
    </b-container>
  </div>
</template>

<script>
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
  }
};
</script>
