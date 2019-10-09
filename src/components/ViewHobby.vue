<template>
  <div class="view">
    <h1>{{ this.user.name }}'s Hobby</h1>

    <li v-for="hobby in this.hobbies" v-bind:key="hobby.id">
      <router-link :to="{ name: 'edit-hobby/:id', params: { id: hobby.id }}">{{ hobby.title }}</router-link>
    </li>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hobbies: "",
      token: this.$store.state.token,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  created() {
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
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>