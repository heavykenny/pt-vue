<template>
  <div class="edit">
    <form class="edit" @submit.prevent="editHobby">
      <h3 class="mt-3">Edit Hobby</h3>
      <label for="title">Title: {{ this.hobby.title }}</label>
      <div>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-input
              required
              v-model="hobby_title"
              type="text"
              placeholder="Hobby Title"
            /> </b-col
        ></b-row>
      </div>
      <br />
      <label for="content">Hobby Content</label>
      <div>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-form-textarea
              required
              id="hobby_content"
              v-model="hobby_content"
              cols="30"
              rows="10"
            ></b-form-textarea></b-col
        ></b-row>
      </div>
      <br />
      <div>
        <b-col md="6" offset-md="3">
          <b-button type="submit" block variant="info">Update</b-button>
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
      hobby: "",
      token: this.$store.state.token,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    editHobby: function() {
      let hobby_title = this.hobby_title;
      let hobby_content = this.hobby_content;
      let url = "https://glacial-spire-34119.herokuapp.com/api/user/user-edit-hobby";
      // let url = "https://localhost/pt-test/public/api/user/user-edit-hobby";
      axios
        .post(url, {
          user_id: this.user.id,
          hobby_id: this.hobby.id,
          hobby_title: hobby_title,
          hobby_content: hobby_content
        })
        .then(() => this.$router.push("/view-hobby"))
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    // let url = "https://glacial-spire-34119.herokuapp.com/api/get-user-details";
    let url = "https://localhost/pt-test/public/api/user/get-hobby-details";
    axios
      .get(url, {
        params: {
          hobby_id: this.$route.params.id
        }
      })
      .then(response => {
        this.hobby = response.data.hobby;
        this.hobby_title = this.hobby.title;
        this.hobby_content = this.hobby.content;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>