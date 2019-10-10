<template>
  <div class="create">
    <form class="login" @submit.prevent="createHobby">
      <h3 class="mt-3">Create Hobby</h3>
      <label for="title">Hobby Title</label>
      <div>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-input
              required
              v-model="hobby_title"
              type="text"
              placeholder="Enter Hobby Title"/></b-col
        ></b-row>
      </div>
      <br />
      <label for="content">Hobby Content</label>
      <div>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-textarea
              required
              v-model="hobby_content"
              id="hobby_content"
              cols="30"
              rows="10"
              placeholder="Enter something cool..."
            ></b-form-textarea></b-col
        ></b-row>
      </div>
      <br />
      <div>
        <b-col md="6" offset-md="3">
          <b-button type="submit" block variant="info"
            >Create New Hobby</b-button
          >
        </b-col>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hobby_title: "",
      hobby_content: "",
      token: this.$store.state.token,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    createHobby: function() {
      let hobby_title = this.hobby_title;
      let hobby_content = this.hobby_content;
      let url = "https://glacial-spire-34119.herokuapp.com/api/user/user-add-hobby";
      // let url = "https://localhost/pt-test/public/api/user/user-add-hobby";
      axios
        .post(url, {
          user_id: this.user.id,
          hobby_title: hobby_title,
          hobby_content: hobby_content
        })
        .then(() => this.$router.push("/view-hobby"))
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>