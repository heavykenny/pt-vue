<template>
  <div class="view">
    <h3 class="mt-3">{{ this.user.name }}'s Hobby</h3>
    <b-list-group>
      <b-col md="6" offset-md="3">
        <b-list-group-item
          v-for="hobby in this.hobbies"
          v-bind:key="hobby.id"
          :to="{ name: 'edit-hobby/:id', params: { id: hobby.id } }"
          >{{ hobby.title }}
          <div>
            <br />
            <b-link
              ><b-button
                v-on:click="deleteHobby(hobby.id)"
                size="sm"
                variant="danger"
                >Delete</b-button
              ></b-link
            >
          </div>
        </b-list-group-item>
      </b-col>
      <div></div>
    </b-list-group>
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
  created() {
    let url = "https://glacial-spire-34119.herokuapp.com/api/get-user-details";
    // let url = "https://localhost/pt-test/public/api/get-user-details";
    axios
      .get(url)
      .then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.user = JSON.parse(localStorage.getItem("user"));
        this.fetchHobby();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteHobby: function(id) {
      let hobby_id = id;
      let url = "https://glacial-spire-34119.herokuapp.com/api/user/user-delete-hobby";
      // let url = "https://localhost/pt-test/public/api/user/user-delete-hobby";
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
      let url = "https://glacial-spire-34119.herokuapp.com/api/user/get-user-hobby";
      // let url = "https://localhost/pt-test/public/api/user/get-user-hobby";
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
  }
};
</script>