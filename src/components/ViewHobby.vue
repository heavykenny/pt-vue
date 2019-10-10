<template>
  <div class="view">
    <h1>{{ this.user.name }}'s Hobby</h1>
    <li v-for="hobby in this.hobbies" v-bind:key="hobby.id">
      <router-link :to="{ name: 'edit-hobby/:id', params: { id: hobby.id } }">{{
        hobby.title
      }}</router-link>
      <br /><button v-on:click="deleteHobby(hobby.id)">Delete</button>
      <hr />
    </li>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hobbies: "",
      user: "",
      token: this.$store.state.token
    };
  },
  mounted() {
    // let url = "https://glacial-spire-34119.herokuapp.com/api/get-user-details";
    let url = "https://localhost/pt-test/public/api/get-user-details";
    axios
      .get(url)
      .then(response => {
        this.user = response.data.user;
        localStorage.setItem("user", JSON.stringify(this.user));
        this.fetchHobby();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteHobby: function(id) {
      let hobby_id = id;
      // let url = "https://glacial-spire-34119.herokuapp.com/api/user/user-delete-hobby";
      let url = "https://localhost/pt-test/public/api/user/user-delete-hobby";
      axios
        .post(url, {
          user_id: this.user.id,
          hobby_id: hobby_id
        })
        .then(() => this.$router.go())
        .catch(error => {
          console.log(error);
        });
    },
    fetchHobby() {
      // let url = "https://glacial-spire-34119.herokuapp.com/api/user/get-user-hobby";
      let url = "https://localhost/pt-test/public/api/user/get-user-hobby";
      axios
        .get(url, {
          params: {
            user_id: this.user.id
          }
        })
        .then(response => {
          this.hobbies = response.data.hobby;
          this.user = JSON.parse(localStorage.getItem("user"));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>