<template>
  <v-container
    v-if="$vuetify.display.mdAndUp"
    fluid
    class="d-flex justify-center align-center"
  >
    <v-text class="text-h3 montserrat">Дизайн Человека</v-text>
    <v-btn class="ml-6" color="primary" @click="createNewPost">New Post</v-btn>
    <v-list v-if="posts">
      <v-list-item
        v-for="post in posts"
        :key="post._id"
      >
      <v-list-item-title>{{ post.title }}</v-list-item-title>
      <v-btn class="ml-6" color="primary" @click="editPost(post._id)">Edit</v-btn>
      <v-btn class="ml-6" color="primary" @click="removePost(post._id)">Delete</v-btn>
    </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from "@/services/api";

const posts = ref([]);
const onePost = ref([]);

const loadPosts = async () => {
  posts.value = await fetchPosts();
};

const loadPost = async (id) => {
  onePost.value = await fetchPost(id);
};

const createNewPost = async () => {
  await createPost({ title: "New Post", content: "content" });
  loadPosts();
};

const editPost = async (id) => {
  await updatePost(id, { title: "Updated Post", content: "edited content"});
  loadPosts();
};

const removePost = async (id) => {
  await deletePost(id);
  loadPosts();
};

onMounted(loadPosts);
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
