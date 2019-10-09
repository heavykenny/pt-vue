<template>
  <div class="create">
    <form class="login" @submit.prevent="createHobby">
      <h1>Create Hobby</h1>
      <label for="title">Hobby Title</label>
      <div>
        <input
          required
          v-model="hobby_title"
          type="text"
          placeholder="Hobby Title"
        />
      </div>

      <label for="content">Hobby Content</label>
      <div>
        <textarea
          required
          v-model="hobby_content"
          id="hobby_content"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
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
      // let url = "https://glacial-spire-34119.herokuapp.com/api/user/user-add-hobby";
      let url = "https://localhost/pt-test/public/api/user/user-add-hobby";
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