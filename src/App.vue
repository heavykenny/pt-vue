<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <div id="nav">
        <div v-if="isLoggedIn">
          <b-link :to="{ name: 'create-hobby' }"
            ><b-button class="mr-2" variant="primary"
              >Create Hobby</b-button
            ></b-link
          >
          <b-link :to="{ name: 'view-hobby' }"
            ><b-button class="mr-2" variant="success"
              >View Hobby</b-button
            ></b-link
          >
          <b-button class="mr-2" variant="danger" @click="logout"
            >Logout</b-button
          >
        </div>
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
