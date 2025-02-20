import { defineStore } from "pinia";
import { ref } from "vue";
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from "@/services/api";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);
  const post = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const getPosts = async () => {
    loading.value = true;
    error.value = null;
    try {
      posts.value = await fetchPosts();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const getPost = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      post.value = await fetchPost(id);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const editPost = async (id, postData) => {
    loading.value = true;
    error.value = null;
    try {
      await updatePost(id, postData);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const addPost = async (postData) => {
    loading.value = true;
    error.value = null;
    try {
      await createPost(postData);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const removePost = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      await deletePost(id);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    post,
    loading,
    error,
    getPosts,
    getPost,
    addPost,
    editPost,
    removePost,
  };
  
});
